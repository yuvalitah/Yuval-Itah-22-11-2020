import React, { useState, useEffect } from "react";
import { getDailyForecasts } from "../../Api/ApiRequests";
import * as MockApiResponses from "../../MockApiResponses/MockApiResponses";
import DailyWeatherCard from "../../Components/DailyWeatherCard/DailyWeatherCard";
import { connect } from "react-redux";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";

const DailyWeatherCardContainer = (props) => {
  const [dailyForecasts, setDailyForecasts] = useState(null);
  const { openSnackbar } = useSnackbar();
  const { id, isCelsius } = props;

  useEffect(() => {
    // getDailyForecasts(id, isCelsius)
    //   .then((response) => setDailyForecasts(response.data.DailyForecasts))
    //   .catch((error) => openSnackbar(error.message, "error"));

    setDailyForecasts(MockApiResponses.DailyForecasts.data.DailyForecasts);
  }, [id, isCelsius]);

  return dailyForecasts ? (
    <DailyWeatherCard dailyForecasts={dailyForecasts} />
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  isCelsius: state.UI.isCelsius,
});

export default connect(mapStateToProps)(DailyWeatherCardContainer);
