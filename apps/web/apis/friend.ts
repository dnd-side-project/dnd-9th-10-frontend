import { axiosInstance } from "../libs/axios";

import {
  FriendInfoRequest,
  DefaultApiFactory,
} from "@dnd9-10/shared/src/__generate__/member/api";

const memberFactory = DefaultApiFactory(undefined, undefined, axiosInstance);

export const getFriends = async () => {
  try {
    const response = await memberFactory.getFriendsUsingGET();
    return response.data?.data?.friends ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getFriend = async (id: number) => {
  try {
    const response = await memberFactory.getFriendsUsingGET();
    return (response.data?.data?.friends ?? []).find((item) => item.id === id);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createFriend = async (payload: FriendInfoRequest) => {
  const response = await memberFactory.createFriendUsingPOST(payload);
  return response.data;
};
