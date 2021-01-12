import React, { createContext, useState, useContext } from "react";
import Snackbar from "../../Components/Snackbar/Snackbar";
import { ISnackbarContext } from "../../Interfaces/ISnackbarContext/ISnackbarContext";
import PropTypes from "prop-types";

const snackbarContext = createContext({} as ISnackbarContext);

export const SnackbarProvider = (props) => {
  const [message, setMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<string>("");
  const { children } = props;

  const openSnackbar = (message: string, severity: string): void => {
    setMessage(message || "");
    setSeverity(severity);
    setIsOpen(true);
  };

  const closeSnackbar = (): void => {
    setIsOpen(false);
  };

  return (
    <snackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      <Snackbar
        openSnackbar={isOpen}
        onClose={closeSnackbar}
        message={message}
        severity={severity}
      />
      {children}
    </snackbarContext.Provider>
  );
};

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSnackbar = (): ISnackbarContext => useContext(snackbarContext);
