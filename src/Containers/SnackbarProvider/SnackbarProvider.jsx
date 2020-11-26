import React, { createContext, useState, useContext } from "react";
import Snackbar from "../../Components/Snackbar/Snackbar";

const snackbarContext = createContext();

export const SnackbarProvider = (props) => {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const { children } = props;

  const openSnackbar = (message, severity) => {
    setMessage(message || "");
    setSeverity(severity);
    setIsOpen(true);
  };

  const closeSnackbar = () => {
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

export const useSnackbar = () => useContext(snackbarContext);
