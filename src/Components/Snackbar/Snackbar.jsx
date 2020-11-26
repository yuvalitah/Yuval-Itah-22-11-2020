import React from "react";
import { Snackbar, IconButton, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles({
  icon: {
    fontSize: 20,
  },
  message: {
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
  },
});

const CustomeSnackbar = (props) => {
  const classes = useStyles();
  const { openSnackbar, severity, onClose, message } = props;

  return (
    <Snackbar open={openSnackbar} onClose={onClose} autoHideDuration={10000}>
      <Alert
        elevation={6}
        variant="filled"
        severity={severity}
        action={
          <IconButton onClick={onClose}>
            <Close color="inherit" className={classes.icon} />
          </IconButton>
        }
        className={classes.message}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomeSnackbar;
