import { AnyAction } from "redux";
import * as ActionTypes from "../Actions/ActionTypes";
import { IUserInterfaceState } from "../Interfaces/IUserInterface/IUserInterfaceState/IUserInterfaceState";

const initialState: IUserInterfaceState = {
  isLightTheme: true,
  isCelsius: true,
};

const uiReducer = (state: IUserInterfaceState = initialState, action: AnyAction): IUserInterfaceState => {
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
