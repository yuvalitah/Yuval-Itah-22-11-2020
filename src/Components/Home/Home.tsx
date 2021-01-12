import React from "react";
import { Paper, InputBase, makeStyles, Box, Theme } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import CityWeatherCardContainer from "../../Containers/CityWeatherCard/CityWeatherCardContainer";
import PropTypes, { string } from "prop-types";

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.background.default,
      minHeight: "90%",
    },
    searchBox: {
      border: "1px solid #ccc",
      marginTop: "2%",
      marginBottom: "2%",
      padding: "8px",
      borderRadius: "10px",
    },
    searchInput: {
      fontSize: "1.2em",
      marginLeft: "2%",
      width: "100%",
    },
  }),
  { flip: false }
);

const Home = (props) => {
  const classes = useStyles();
  const { searchInput, handleSearchInput, cityData } = props;

  return (
    <Paper className={classes.root}>
      <Box
        display="flex"
        alignItems="center"
        width="30%"
        className={classes.searchBox}
      >
        <Search fontSize="default" color="primary" />
        <InputBase
          placeholder="Type here a city name"
          onChange={(event) => handleSearchInput(event)}
          value={searchInput.replace(/[^A-Za-z\s]/gi, "")}
          className={classes.searchInput}
        />
      </Box>
      {cityData ? (
        <CityWeatherCardContainer
          id={cityData.Key}
          name={cityData.LocalizedName}
        />
      ) : (
        <></>
      )}
    </Paper>
  );
};

Home.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  cityData: PropTypes.shape({
    key: PropTypes.string,
    LocalizedName: PropTypes.string,
  }),
};

export default Home;
