import { axiosInstance } from "../libs/axios";

import { DefaultApiFactory } from "@dnd9-10/shared/src/__generate__/account/api";
import { DefaultApiFactory as MemberDefaultApiFactory  } from "@dnd9-10/shared/src/__generate__/member/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);
const memberFactory = MemberDefaultApiFactory(undefined, undefined, axiosInstance);

export const getMember = async () => {
  const response = await memberFactory.getMemberUsingGET()
  return response.data?.data;
};

export const kakaoLogin = async (code: string) => {
  const response = await factory.kakaoLoginUsingGET(code);
  return response.data;
};

export const guestSignupServer = async () => {
  const response = await factory.guestSignupUsingPOST()
  return response.data;
};

export const guestSignup = async () => {
  const response = await axiosInstance.get('/api/guest/signup')
  return response.data;
};

export const getKakaoAuthCode = async () => {
  const response = await factory.getKakaoAuthCodeUsingGET();
  return response.data;
};
