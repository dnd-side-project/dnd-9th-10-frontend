import { axiosInstance } from "../libs/axios";

import {
  BookmarkRequestDto,
  ChecklistInfoRequestDto,
  FriendRequestDto,
  MemberChecklistRequestDto,
  MockApiFactory,
} from "../__generate__/api";

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getFriends = async () => {
  const response = await factory.getFriendsUsingGET();
  return response.data?.data?.friends ?? [];
};

export const createFriend = async (payload: FriendRequestDto) => {
  const response = await factory.createFriendUsingPOST(payload);
  return response.data;
};
