import { axiosInstance } from "../libs/axios";

import {
  BookmarkRequestDto,
  ChecklistInfoRequestDto,
  FriendRequestDto,
  MemberChecklistRequestDto,
  MockApiFactory,
} from "@dnd9-10/shared/src/__generate__/api/api";

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getBbokCharacters = async () => {
  const response = await factory.getBbokCharacterUsingGET();
  return response.data?.data?.characters ?? [];
};
