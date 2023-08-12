import { axiosInstance } from "../libs/axios";

import { MockApiFactory } from "@dnd9-10/shared/src/__generate__/api/api";
import {
  FriendRequestDto,
  DefaultApiFactory,
} from "@dnd9-10/shared/src/__generate__/member/api";

const memberFactory = DefaultApiFactory(undefined, undefined, axiosInstance);

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getFriends = async () => {
  const response = await factory.getFriendsUsingGET();
  return response.data?.data?.friends ?? [];
};

export const createFriend = async (payload: FriendRequestDto) => {
  const response = await memberFactory.createFriendUsingPOST(payload);
  return response.data;
};
