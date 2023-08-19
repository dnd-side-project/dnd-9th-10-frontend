import axios from "axios";
import { storage } from "./cookie-storage";

export const axiosInstance = axios.create({});

export const setAccessToken = (
  authorization = storage().getAccessToken()
    ? "Bearer " + storage().getAccessToken()
    : undefined
) => {
  console.log({
    authorization
  })

  axiosInstance.defaults.headers.Authorization = authorization;
};
