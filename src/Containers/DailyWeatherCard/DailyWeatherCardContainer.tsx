import React, { useState, useEffect } from "react";
import { getDailyForecasts } from "../../Api/ApiRequests";
import DailyWeatherCard from "../../Components/DailyWeatherCard/DailyWeatherCard";
import { connect } from "react-redux";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";
import PropTypes from "prop-types";
import { RootState } from "../../Types/RootState/RootState";
import { IDailyForecast } from "../../Interfaces/ApiObjectsInterfaces/ApiObjectsInterfaces";

const DailyWeatherCardContainer = (props) => {
  const [dailyForecasts, setDailyForecasts] = useState<IDailyForecast[]>(null);
  const { openSnackbar } = useSnackbar();
  const { id, isCelsius } = props;

  useEffect(() => {
    getDailyForecasts(id, isCelsius)
      .then((response) => setDailyForecasts(response.data.DailyForecasts))
      .catch((error) => openSnackbar(error.message, "error"));
  }, [id, isCelsius]);

  return dailyForecasts ? (
    <DailyWeatherCard dailyForecasts={dailyForecasts} />
  ) : (
    <></>
  );
};

const mapStateToProps = (state: RootState) => ({
  isCelsius: state.UI.isCelsius,
});

DailyWeatherCardContainer.propTypes = {
  isCelsius: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(DailyWeatherCardContainer);
