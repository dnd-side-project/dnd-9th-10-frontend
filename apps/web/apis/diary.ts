import { axiosInstance } from "../libs/axios";

import { DefaultApiFactory, DiaryRequestDto } from "@dnd9-10/shared/src/__generate__/member/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);

export const getDiaries = async (params: {
  id: number;
  offset?: number;
  order?: string;
  q?: string;
  tag?: string;
}) => {
  const { id, offset, order, q, tag } = params;
  try {
    const response = await factory.getDiariesUsingGET(
      id,
      offset,
      order,
      q,
      tag
    );
    return response.data?.data ?? [];
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createDiary = async (params: {
    id: number;
    diaryRequestDto?: DiaryRequestDto
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
  