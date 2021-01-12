import { IFavoriteCity } from "../Interfaces/IFavorites/IFavoritesState/IFavoriteState";
import { FavoritesActions } from "../Types/FavoritesActions/FavoritesActions";
import * as ActionTypes from "./ActionTypes";

export const addFavoriteCity = (payload: IFavoriteCity): FavoritesActions => ({
    type: ActionTypes.ADD_FAVORITE_CITY,
    payload,
});

export const removeFavoriteCity = (payload: string): FavoritesActions => ({
    type: ActionTypes.REMOVE_FAVORITE_CITY,
    payload,
});