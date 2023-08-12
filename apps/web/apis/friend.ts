import { axiosInstance } from "../libs/axios";

import {
  FriendRequestDto,
  MockApiFactory,
} from "@dnd9-10/shared/src/__generate__/api/api";

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getFriends = async () => {
  const response = await factory.getFriendsUsingGET();
  return response.data?.data?.friends ?? [];
};

export const createFriend = async (payload: FriendRequestDto) => {
  const response = await factory.createFriendUsingPOST(payload);
  return response.data;
};
