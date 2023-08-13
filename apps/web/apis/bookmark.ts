import { axiosInstance } from "../libs/axios";

import {
  BookmarkRequestDto,
  MockApiFactory,
} from "@dnd9-10/shared/src/__generate__/api/api";

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getBookmarks = async () => {
  
  try {
    const response = await factory.getBookmarksUsingGET();
    return response.data?.data?.bookmarks ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const createBookmark = async (payload: BookmarkRequestDto) => {
  const response = await factory.createBookmarkUsingPOST(payload);
  return response.data;
};

export const deleteBookmark = async (id: number) => {
  const response = await factory.deleteBookmarkUsingDELETE(id);
  return response.data;
};
