import axios from "axios";
import { storage } from "./cookie-storage";

import { redirectSigninIf401 } from "./router";

export const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    redirectSigninIf401(error.response?.status);
    return error;
  }
);

export const setAccessToken = (
  authorization = storage().getAccessToken()
    ? "Bearer " + storage().getAccessToken()
    : undefined
) => {
  axiosInstance.defaults.headers.Authorization = authorization;
};
