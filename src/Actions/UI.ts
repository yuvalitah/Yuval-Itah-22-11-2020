import { UIActions } from "../Types/UIActions/UIActions";
import * as ActionTypes from "./ActionTypes";

export const toggleTheme = (): UIActions => ({
    type: ActionTypes.TOGGLE_THEME,
});

export const toggleDegrees = (): UIActions => ({
    type: ActionTypes.TOGGLE_DEGREES,
});