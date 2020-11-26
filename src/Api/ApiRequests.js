import axios from "../Axios/Axios";
import * as ApiAddresses from "../Consts/ApiAddreses";

export const getCityDataByName = async (cityName) => {
  return await axios.get(
    `${ApiAddresses.AUTOCOMPLETE_API + ApiAddresses.API_KEY}&q=${cityName}`
  );
};

export const getCurrentWeatherData = async (cityId) => {
  return await axios.get(
    `${ApiAddresses.CURRENT_CONDITIONS_API}/${cityId + ApiAddresses.API_KEY}`
  );
};

export const getDailyForecasts = async (cityId, isCelsius) => {
  return await axios.get(
    `${ApiAddresses.DAILY_FORECAST_API}/${
      cityId + ApiAddresses.API_KEY
    }&metric=${isCelsius}`
  );
};

export const getCityDataByGeoposition = async (latitude, longitude) => {
  return await axios.get(
    `${ApiAddresses.GEOPOSITION_SEARCH_API}${ApiAddresses.API_KEY}&q=${latitude}%2C%20${longitude}`
  );
};
