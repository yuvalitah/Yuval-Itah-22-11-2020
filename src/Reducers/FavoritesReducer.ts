import { AnyAction } from "redux";
import * as ActionTypes from "../Actions/ActionTypes";
import { IFavoritesState } from "../Interfaces/IFavorites/IFavoritesState/IFavoriteState";

const initialState: IFavoritesState = {
  favorites: [],
};

const favoritesReducer = (state: IFavoritesState = initialState, action: AnyAction): IFavoritesState => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE_CITY:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case ActionTypes.REMOVE_FAVORITE_CITY:
      return {
        ...state,
        favorites: state.favorites.filter((city) => city.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
