import React, { useState, useEffect } from "react";
import * as MockApiResponses from "../../MockApiResponses/MockApiResponses";
import CityWeatherCard from "../../Components/CityWeatherCard/CityWeatherCard";
import { getCurrentWeatherData } from "../../Api/ApiRequests";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";

const CityWeatherCardContainer = (props) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const { openSnackbar } = useSnackbar();
  const { id, name } = props;

  useEffect(() => {
    getCurrentWeatherData(id)
      .then((response) => setCurrentWeatherData(response.data[0]))
      .catch((error) => openSnackbar(error.message, "error"));

    // setCurrentWeatherData(MockApiResponses.CurrentConditions.data);
  }, [id]);

  return currentWeatherData ? (
    <CityWeatherCard
      id={id}
      name={name}
      degrees={{
        celsius: currentWeatherData.Temperature.Metric.Value,
        farenheit: currentWeatherData.Temperature.Imperial.Value,
      }}
      weatherText={currentWeatherData.WeatherText}
      weatherIcon={currentWeatherData.WeatherIcon}
    />
  ) : (
    <></>
  );
};

export default CityWeatherCardContainer;
