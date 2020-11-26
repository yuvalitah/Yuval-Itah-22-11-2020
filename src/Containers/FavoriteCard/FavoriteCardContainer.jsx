import React from "react";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";
import { connect } from "react-redux";
import { Paper, Box, makeStyles } from "@material-ui/core";
import { tabs } from "../../Consts/Tabs";

const useStyles = makeStyles((theme) => ({
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

  const navigateToCityCard = (cityName) => {
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
        {favorites.map((favoriteCity, index) => (
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

const mapStateToProps = (state) => ({
  favorites: state.Favorites.favorites,
  isCelsius: state.UI.isCelsius,
});

export default connect(mapStateToProps)(FavoriteCardContainer);
