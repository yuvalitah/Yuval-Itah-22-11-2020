import axios from "axios";
import { BASE_API } from "../Consts/ApiAddreses";

const axiosInstance = axios.create({
  baseURL: BASE_API,
});

export default axiosInstance;
