import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { picturesEnum } from "../../Consts/PicturesEnum";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
    borderRadius: 0,
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const DailyWeatherCard = (props) => {
  const classes = useStyles();
  const { dailyForecasts, isCelsius } = props;
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return dailyForecasts.map((forecast, index) => {
    const forecastDay = new Date(forecast.Date).getDay();
    return (
      <Card className={classes.cardContainer} key={index}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">{weekDay[forecastDay]}</Typography>
          <img
            src={picturesEnum[forecast.Day.Icon]}
            alt="daily forecast image"
          />
          <Typography variant="subtitle1">
            {forecast.Temperature.Minimum.Value} -{" "}
            {forecast.Temperature.Maximum.Value}{" "}
            {isCelsius ? "\u00b0C" : "\u00b0F"}
          </Typography>
        </CardContent>
      </Card>
    );
  });
};

const mapStateToProps = (state) => ({
  isCelsius: state.UI.isCelsius,
});

export default connect(mapStateToProps)(DailyWeatherCard);
