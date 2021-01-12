import React from "react";
import HeaderContainer from "./Containers/Header/HeaderContainer";
import { Route, Switch } from "react-router-dom";
import { tabs } from "./Consts/Tabs";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./Theme/Theme";
import { SnackbarProvider } from "./Containers/SnackbarProvider/SnackbarProvider";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const App = (props) => {
  const { isLightTheme } = props;
  const appliedTheme: Theme = createMuiTheme(isLightTheme ? lightTheme : darkTheme);

  return (
      <ThemeProvider theme={appliedTheme}>
        <SnackbarProvider>
          <HeaderContainer />
          <Switch>
            {tabs.map((tab, index) => (
              <Route
                key={index}
                path={tab.route}
                component={tab.component}
                exact={tab.exact}
              />
            ))}
          </Switch>
        </SnackbarProvider>
      </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.UI.isLightTheme,
});

App.propTypes = {
  isLightTheme: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
