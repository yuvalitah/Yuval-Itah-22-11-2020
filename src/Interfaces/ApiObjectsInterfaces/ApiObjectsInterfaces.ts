export interface ICurrentWeatherData {
    Temperature: {
        Imperial: {
            Unit: string
            UnitType: number
            Value: number
        },
        Metric: {
            Unit: string
            UnitType: number
            Value: number
        }
    },
    WeatherText: string,
    WeatherIcon: number,
};

export interface IDailyForecast {
    Date: string,
    Day: {
        Icon: number,
    },
    Temperature: {
        Maximum: {
            Unit: string,
            UnitType: number,
            Value: number,
        },
        Minimum: {
            Unit: string,
            UnitType: number,
            Value: number,
        },
    },
};

export interface ICityData {
    key: string,
    LocalizedName: string,
};