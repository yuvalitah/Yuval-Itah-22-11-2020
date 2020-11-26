import React from "react";
import {
  Card,
  CardHeader,
  makeStyles,
  IconButton,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import { Favorite, LocationOn, FavoriteBorder } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import DailyWeatherCardContainer from "../../Containers/DailyWeatherCard/DailyWeatherCardContainer";
import { connect } from "react-redux";
import * as ActionCreators from "../../Actions/ActionCreators";
import { picturesEnum } from "../../Consts/PicturesEnum";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    borderRadius: "10px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  dailyCardsContainer: {
    marginTop: "3em",
    width: "100%",
    backgroundColor: grey[theme.palette.type === "light" ? 700 : 800],
  },
}));

const CityWeatherCard = (props) => {
  const classes = useStyles();
  const {
    id,
    name,
    weatherText,
    removeFavoriteCity,
    addFavoriteCity,
    isCelsius,
    favorites,
    weatherIcon,
  } = props;
  const { celsius, farenheit } = props.degrees;

  const isFavoriteCity = favorites
    .map((favoriteCity) => favoriteCity.id)
    .includes(id);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            width="100%"
          >
            <LocationOn size="medium" />
            <Typography variant="h5">{name}</Typography>
          </Box>
        }
        action={
          <IconButton
            variant="contained"
            size="medium"
            onClick={() => {
              isFavoriteCity
                ? removeFavoriteCity(id)
                : addFavoriteCity({
                    id,
                    name,
                    weatherText,
                    degrees: {
                      celsius,
                      farenheit,
                    },
                  });
            }}
          >
            {isFavoriteCity ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        }
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h3">
          {isCelsius ? celsius + "\u00b0C" : farenheit + "\u00b0F"}
        </Typography>
        {weatherIcon < 33 ? (
          <img src={picturesEnum[weatherIcon]} alt="City Weather Icon" />
        ) : null}
        <Typography variant="h4">{weatherText}</Typography>
        <Box
          display="flex"
          justifyContent="space-evenly"
          className={classes.dailyCardsContainer}
        >
          <DailyWeatherCardContainer id={id} />
        </Box>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.Favorites.favorites,
  isCelsius: state.UI.isCelsius,
});

const mapDispatchToProps = (dispatch) => ({
  addFavoriteCity: (cityData) =>
    dispatch(ActionCreators.addFavoriteCity(cityData)),
  removeFavoriteCity: (id) => dispatch(ActionCreators.removeFavoriteCity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CityWeatherCard);
