import React, { useState, useEffect } from "react";
import debounce from "../../Debounce/Debounce";
import * as MockApiResponses from "../../MockApiResponses/MockApiResponses";
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

  useEffect(() => {
    if (searchInput) {
      const getCityDataDebounce = debounce(async () => {
        getCityDataByName(searchInput)
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
      }, 1000);

      getCityDataDebounce();
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

    // setCityData(MockApiResponses.Autocomplete.data[0]);
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
