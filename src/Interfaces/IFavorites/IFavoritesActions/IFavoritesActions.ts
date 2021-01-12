import * as ActionTypes from "../../../Actions/ActionTypes";
import { IFavoriteCity } from "../IFavoritesState/IFavoriteState";

export interface IAddFavoriteCityAction {
    type: typeof ActionTypes.ADD_FAVORITE_CITY,
    payload: IFavoriteCity,
};

export interface IRemoveFavoriteCityAction {
    type: typeof ActionTypes.REMOVE_FAVORITE_CITY,
    payload: string,
};