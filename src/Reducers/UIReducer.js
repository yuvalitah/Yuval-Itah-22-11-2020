import * as ActionTypes from "../Actions/ActionTypes";

const initialState = {
  isLightTheme: true,
  isCelsius: true,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_THEME:
      return {
        ...state,
        isLightTheme: !state.isLightTheme,
      };
    case ActionTypes.TOGGLE_DEGREES:
      return {
        ...state,
        isCelsius: !state.isCelsius,
      };
    default:
      return state;
  }
};

export default uiReducer;
