import { axiosInstance } from "../libs/axios";

import { DefaultApiFactory } from "@dnd9-10/shared/src/__generate__/account/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);

export const kakaoLogin = async (code: string) => {
  const response = await factory.kakaoLoginUsingPOST(code);
  return response.data;
};

export const guestLogin = async () => {
  const response = await factory.guestLoginUsingPOST();
  return response.data;
};

export const getKakaoAuthCode = async () => {
  const response = await factory.getKakaoAuthCodeUsingGET();
  return response.data;
};
