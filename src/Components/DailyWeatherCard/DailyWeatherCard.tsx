import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { picturesEnum } from "../../Consts/PicturesEnum";
import { IDailyForecast } from "../../Interfaces/ApiObjectsInterfaces/ApiObjectsInterfaces";
import { RootState } from "../../Types/RootState/RootState";
import PropTypes from "prop-types";

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
  const weekDay: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return dailyForecasts.map((forecast: IDailyForecast, index: number) => {
    const forecastDay: number = new Date(forecast.Date).getDay();
    return (
      <Card className={classes.cardContainer} key={index}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">{weekDay[forecastDay]}</Typography>
          <img src={picturesEnum[forecast.Day.Icon]} alt="daily forecast" />
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

const mapStateToProps = (state: RootState) => ({
  isCelsius: state.UI.isCelsius,
});

DailyWeatherCard.propTypes = {
  dailyForecasts: PropTypes.arrayOf(PropTypes.shape({
    Date: PropTypes.string,
    Day: PropTypes.shape({
        Icon: PropTypes.number,
    }),
    Temperature: PropTypes.exact({
        Maximum: PropTypes.exact({
            Unit: PropTypes.string,
            UnitType: PropTypes.number,
            Value: PropTypes.number,
        }),
        Minimum: PropTypes.exact({
            Unit: PropTypes.string,
            UnitType: PropTypes.number,
            Value: PropTypes.number,
        }),
      }), 
    })
  ).isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(DailyWeatherCard);
