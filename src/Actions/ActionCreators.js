import * as ActionTypes from "./ActionTypes";

export const addFavoriteCity = (payload) => ({
  type: ActionTypes.ADD_FAVORITE_CITY,
  payload,
});

export const removeFavoriteCity = (payload) => ({
  type: ActionTypes.REMOVE_FAVORITE_CITY,
  payload,
});

export const toggleTheme = () => ({
  type: ActionTypes.TOGGLE_THEME,
});

export const toggleDegrees = () => ({
  type: ActionTypes.TOGGLE_DEGREES,
});
