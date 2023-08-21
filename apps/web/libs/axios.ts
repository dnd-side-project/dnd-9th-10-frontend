import axios from "axios";
import { storage } from "./cookie-storage";

import { redirectSigninIf401 } from "./router";
import { isBrowser } from "@dnd9-10/shared/src/utils/browser";

export const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    isBrowser() && redirectSigninIf401(error.response?.status);
    return error;
  }
);

export const setAccessToken = (
  authorization = storage().getAccessToken()
) => {
  axiosInstance.defaults.headers.Authorization = authorization
    ? "Bearer " + authorization
    : undefined;
};
