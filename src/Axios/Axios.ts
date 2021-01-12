import axios, { AxiosInstance } from "axios";
import { BASE_API } from "../Consts/ApiAddreses";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_API,
});

export default axiosInstance;
