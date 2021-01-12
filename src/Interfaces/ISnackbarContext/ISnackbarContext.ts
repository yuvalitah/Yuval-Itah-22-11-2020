export interface ISnackbarContext {
    openSnackbar: (message: string, severity: string) => void,
    closeSnackbar: () => void,
};