import * as ActionTypes from "../Actions/ActionTypes";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
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
