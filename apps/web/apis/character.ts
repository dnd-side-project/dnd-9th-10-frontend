import { axiosInstance } from "../libs/axios";

import {
  BookmarkRequestDto,
  ChecklistInfoRequestDto,
  FriendRequestDto,
  MemberChecklistRequestDto,
  MockApiFactory,
} from "../__generate__/api";

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getBbokCharacters = async () => {
  const response = await factory.getBbokCharacterUsingGET();
  return response.data?.data?.characters ?? [];
};
