import { storage } from "../libs/ssr-cookie-storage";
import { setAccessToken } from "../libs/axios";

export const initializeServer = (options?: { accessToken?: string }) => {
  setAccessToken(options?.accessToken ?? storage().getAccessToken());
};
