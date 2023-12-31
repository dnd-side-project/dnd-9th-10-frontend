import { axiosInstance } from "../libs/axios";

import {
  CreateDiaryRequest,
  DefaultApiFactory,
} from "@dnd9-10/shared/src/__generate__/member/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);

export const getDiaries = async (params: {
  id: number;
  offset?: number;
  order?: string;
  q?: string;
  tag?: string;
}) => {
  const { id, offset, order, q, tag } = params;
  const response = await factory.getDiariesUsingGET(id, offset, order, q, tag);
  return response.data?.data ?? {};
};

export const getDiary = async (params: { id: number }) => {
  const { id } = params;
  const response = await factory.getDiaryUsingGET(id);
  return response.data?.data ?? {};
};

export const createDiary = async (params: {
  friendId: number;
  diaryRequestDto?: CreateDiaryRequest;
}) => {
  const { friendId: id, diaryRequestDto } = params;

  const response = await factory.createDiaryUsingPOST(id, diaryRequestDto);
  return response.data?.data;
};

export const deleteDiary = async (id: number) => {
  const response = await factory.deleteDiaryUsingDELETE(id);
  return response.data;
};
