import { axiosInstance } from "../libs/axios";

import { DefaultApiFactory } from "@dnd9-10/shared/src/__generate__/member/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);

export const getBbokCharacters = async () => {
  try {
    const response = await factory.getBbokCharacterUsingGET();
    return response.data?.data?.characters ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
};
