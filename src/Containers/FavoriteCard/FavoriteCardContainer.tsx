import React from "react";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";
import { connect } from "react-redux";
import { Paper, Box, makeStyles, Theme } from "@material-ui/core";
import { tabs } from "../../Consts/Tabs";
import ReactRouterPropTypes from "react-router-prop-types";
import PropTypes from "prop-types";
import { RootState } from "../../Types/RootState/RootState";
import { IFavoriteCity } from "../../Interfaces/IFavorites/IFavoritesState/IFavoriteState";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    minHeight: "90%",
  },
  favoritesCardContainer: {
    marginTop: "5%",
  },
}));

const FavoriteCardContainer = (props) => {
  const classes = useStyles();
  const { history, favorites, isCelsius } = props;

  const navigateToCityCard = (cityName: string): void => {
    history.push({
      pathname: tabs.find((tab) => tab.label === "Home").route,
      search: `?cityName=${cityName}`,
    });
  };

  return (
    <Paper className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        textAlign="center"
        width="80%"
        flexWrap="wrap"
        className={classes.favoritesCardContainer}
      >
        {favorites.map((favoriteCity: IFavoriteCity, index: number) => (
          <FavoriteCard
            key={index}
            name={favoriteCity.name}
            degrees={
              isCelsius
                ? favoriteCity.degrees.celsius
                : favoriteCity.degrees.farenheit
            }
            weatherText={favoriteCity.weatherText}
            navigateToCityCard={navigateToCityCard}
          />
        ))}
      </Box>
    </Paper>
  );
};

const mapStateToProps = (state: RootState) => ({
  favorites: state.Favorites.favorites,
  isCelsius: state.UI.isCelsius,
});

FavoriteCardContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    weatherText: PropTypes.string,
    degrees: PropTypes.exact({
        celsius: PropTypes.number,
        farenheit: PropTypes.number,
    }),
  })).isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(FavoriteCardContainer);
