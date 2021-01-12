export interface IFavoriteCity {
    id: string,
    name: string,
    weatherText: string,
    degrees: {
        celsius: number,
        farenheit: number,
    },
};

export interface IFavoritesState {
    favorites: IFavoriteCity[],
};