import { ThemeOptions } from "@material-ui/core";
import { cyan, grey } from "@material-ui/core/colors";

const sharedOverrides = {
  MuiTooltip: {
    tooltip: {
      fontSize: "15px",
    },
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: cyan[800],
    },
    secondary: {
      main: cyan[200],
    },
    background: {
      default: grey[200],
    },
  },
  overrides: {
    ...sharedOverrides,
    MuiAppBar: {
      colorPrimary: {
        background: cyan[800],
        color: "black",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: cyan[800],
        color: "black",
      },
    },
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: cyan[200],
    },
  },
  overrides: {
    ...sharedOverrides,
    MuiAppBar: {
      colorPrimary: {
        background: cyan[900],
        color: "white",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: cyan[800],
        color: "white",
      },
    },
    MuiCard: {
      root: {
        border: "1px solid darkgrey",
      },
    },
  },
};
