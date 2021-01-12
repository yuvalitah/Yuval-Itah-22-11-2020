import React, { useState, useEffect } from "react";
import CityWeatherCard from "../../Components/CityWeatherCard/CityWeatherCard";
import { getCurrentWeatherData } from "../../Api/ApiRequests";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";
import PropTypes from "prop-types";
import { ICurrentWeatherData } from "../../Interfaces/ApiObjectsInterfaces/ApiObjectsInterfaces";

const CityWeatherCardContainer = (props) => {
  const [currentWeatherData, setCurrentWeatherData] = useState<ICurrentWeatherData>(null);
  const { openSnackbar } = useSnackbar();
  const { id, name } = props;

  useEffect(() => {
    getCurrentWeatherData(id)
      .then((response) => setCurrentWeatherData(response.data[0]))
      .catch((error) => openSnackbar(error.message, "error"));
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

CityWeatherCardContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CityWeatherCardContainer;
