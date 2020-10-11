import axios from "axios";
import { appConfig } from "../config/appConfig";

export default axios.create({
  baseURL: appConfig.baseURL,
  withCredentials: false,
});
