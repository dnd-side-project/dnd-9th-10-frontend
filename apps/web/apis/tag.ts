import { axiosInstance } from "../libs/axios";

import {
  DefaultApiFactory,
} from "@dnd9-10/shared/src/__generate__/member/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);

export const getTags = async (friendId: number) => {
  const response = await factory.getTagsUsingGET(friendId);
  return response.data?.data?.tags ?? [];
};
