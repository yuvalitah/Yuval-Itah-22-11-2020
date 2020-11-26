import { combineReducers } from "redux";
import favoritesReducer from "./FavoritesReducer";
import uiReducer from "./UIReducer";

const rootReducer = combineReducers({
  Favorites: favoritesReducer,
  UI: uiReducer,
});

export default rootReducer;
