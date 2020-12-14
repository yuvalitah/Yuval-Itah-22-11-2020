import React, { useState, useEffect, useCallback } from "react";
import debounce from "../../Debounce/Debounce";
import Home from "../../Components/Home/Home";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";
import {
  getCityDataByName,
  getCityDataByGeoposition,
} from "../../Api/ApiRequests";

const HomeContainer = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [cityData, setCityData] = useState(null);
  const { openSnackbar } = useSnackbar();
  const { location } = props;
  const getCityDataDebouncedCallback = useCallback(
    debounce(async (searchInput) => {
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
    }, 3000),
    []
  );

  useEffect(() => {
    if (searchInput) {
      getCityDataDebouncedCallback(searchInput);
    } else {
      const getCityData = (position) => {
        getCityDataByGeoposition(
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
  }, [searchInput]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const cityName = urlParams.get("cityName");
    setSearchInput(cityName || "");
  }, [location.search]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Home
      searchInput={searchInput}
      cityData={cityData}
      handleSearchInput={handleSearchInput}
    />
  );
};

export default HomeContainer;
