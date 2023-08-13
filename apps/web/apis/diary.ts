import { axiosInstance } from "../libs/axios";

import {
  DefaultApiFactory,
  DiaryRequestDto,
} from "@dnd9-10/shared/src/__generate__/member/api";
import {
  MockApiFactory,
} from "@dnd9-10/shared/src/__generate__/api/api";

const mockFactory = MockApiFactory(undefined, undefined, axiosInstance);
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
  const response = await mockFactory.getDiaryUsingGET(id);
  return response.data?.data ?? {};
};

export const createDiary = async (params: {
  id: number;
  diaryRequestDto?: DiaryRequestDto;
}) => {
  const { id, diaryRequestDto } = params;

  try {
    const response = await factory.createDiaryUsingPOST(id, diaryRequestDto);
    return response.data?.data ?? [];
  } catch (e) {
    console.error(e);
    return null;
  }
};
