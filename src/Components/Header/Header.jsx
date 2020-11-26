import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  makeStyles,
  Tooltip,
  IconButton,
  Box,
  Switch,
} from "@material-ui/core";
import { tabs } from "../../Consts/Tabs";
import { Link } from "react-router-dom";
import { Brightness4, BrightnessHigh } from "@material-ui/icons";
import { connect } from "react-redux";
import * as ActionCreators from "../../Actions/ActionCreators";

const useStyles = makeStyles({
  appBar: {
    height: "10%",
  },
  toolbarTitle: {
    fontWeight: "bold",
  },
});

const Header = (props) => {
  const classes = useStyles();
  const {
    toggleTheme,
    isLightTheme,
    isCelsius,
    toggleDegrees,
    selectedTab,
    handleSelectedTab,
  } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box display="flex" alignItems="center">
            <Tooltip title={"Change theme"}>
              <IconButton onClick={toggleTheme}>
                {isLightTheme ? <Brightness4 /> : <BrightnessHigh />}
              </IconButton>
            </Tooltip>
            <Typography variant="h6" className={classes.toolbarTitle}>
              Herolo Weather Task
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h4">&#8457;</Typography>
            <Switch checked={isCelsius} onChange={toggleDegrees} />
            <Typography variant="h4">&#8451;</Typography>
          </Box>
          <Tabs value={selectedTab} onChange={handleSelectedTab}>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={<Typography variant="caption">{tab.label}</Typography>}
                component={Link}
                to={tab.route}
                value={tab.route}
                icon={tab.icon}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.UI.isLightTheme,
  isCelsius: state.UI.isCelsius,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(ActionCreators.toggleTheme()),
  toggleDegrees: () => dispatch(ActionCreators.toggleDegrees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
