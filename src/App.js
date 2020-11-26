import React from "react";
import HeaderContainer from "./Containers/Header/HeaderContainer";
import { Route, Switch } from "react-router-dom";
import { tabs } from "./Consts/Tabs";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./Theme/Theme";
import { SnackbarProvider } from "./Containers/SnackbarProvider/SnackbarProvider";
import { connect } from "react-redux";

const App = (props) => {
  const { isLightTheme } = props;
  const appliedTheme = createMuiTheme(isLightTheme ? lightTheme : darkTheme);

  return (
    <>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.UI.isLightTheme,
});

export default connect(mapStateToProps)(App);
