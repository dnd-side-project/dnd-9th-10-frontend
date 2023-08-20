import { storage } from "../libs/ssr-cookie-storage";
import { setAccessToken } from "../libs/axios";

export const initializeServer = () => {
  setAccessToken(
    storage().getAccessToken()
      ? "Bearer " + storage().getAccessToken()
      : undefined
  );
};
