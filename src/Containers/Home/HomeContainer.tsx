import React, { useState, useEffect, useCallback } from "react";
import debounce from "../../Debounce/Debounce";
import Home from "../../Components/Home/Home";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";
import {
  getCityDataByName,
  getCityDataByGeoposition,
} from "../../Api/ApiRequests";
import { ISnackbarContext } from "../../Interfaces/ISnackbarContext/ISnackbarContext";
import ReactRouterPropTypes from "react-router-prop-types";
import { ICityData } from "../../Interfaces/ApiObjectsInterfaces/ApiObjectsInterfaces";

const HomeContainer = (props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [cityData, setCityData] = useState<ICityData>(null);
  const { openSnackbar }: ISnackbarContext = useSnackbar();
  const { location } = props;

  const getCityDataDebouncedCallback = useCallback(
    debounce(async (searchInput: string): Promise<void> => {
      await getCityDataByName(searchInput)
        .then((response) => {
          if (response.data.length) {
            setCityData(response.data[0]);
          } else {
            openSnackbar(
              "Oops! We couldn't find any cities that match your search.",
              "warning"
            );
          }
        })
        .catch((error) => openSnackbar(error.message, "error"));
    }, 2000),
    []
  );

  useEffect(() => {
    if (searchInput) {
      getCityDataDebouncedCallback(searchInput);
    } else if (location.search) {
      const urlParams: URLSearchParams = new URLSearchParams(location.search);
      const cityName: string = urlParams.get("cityName");
      setSearchInput(cityName || "");
    } else {
      const getCityData = async (position: GeolocationPosition): Promise<void> => {
        await getCityDataByGeoposition(
          position.coords.latitude,
          position.coords.longitude
        )
          .then((response) => setCityData(response.data))
          .catch((error) => openSnackbar(error.message, "error"));
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCityData);
      }
    }
  }, [searchInput, location.search]);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
    location.search = event.target.value;
  };

  return (
    <Home
      searchInput={searchInput}
      cityData={cityData}
      handleSearchInput={handleSearchInput}
    />
  );
};

HomeContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default HomeContainer;
