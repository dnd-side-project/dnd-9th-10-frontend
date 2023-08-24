import { axiosInstance } from "../libs/axios";

import {
  CreateBookmarkRequest,
  DefaultApiFactory,
} from "@dnd9-10/shared/src/__generate__/member/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);

export const getBookmarks = async () => {
  try {
    const response = await factory.getBookmarksUsingGET();
    return response.data?.data?.bookmarks ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const createBookmark = async (payload: CreateBookmarkRequest) => {
  const response = await factory.createBookmarkUsingPOST(payload);
  return response.data;
};

export const deleteBookmark = async (id: number) => {
  const response = await factory.deleteBookmarkUsingDELETE(id);
  return response.data;
};
