import { axiosInstance } from "../libs/axios";

import {
  ChecklistInfoRequestDto,
  MemberChecklistRequestDto,
  MockApiFactory,
} from "@dnd9-10/shared/src/__generate__/api";

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getBasicChecklist = async () => {
  const response = await factory.getBasicChecklistUsingGET();
  return response.data?.data ?? { badChecklist: [], goodChecklist: [] };
};

export const getChecklist = async () => {
  const response = await factory.getChecklistUsingGET();

  return response.data?.data ?? { badChecklist: [], goodChecklist: [] };
};

export const createChecklist = async (payload: MemberChecklistRequestDto) => {
  const response = await factory.createChecklistUsingPOST(payload);
  return response.data;
};

export const updateChecklist = async (payload: ChecklistInfoRequestDto) => {
  const response = await factory.updateChecklistUsingPATCH(payload);
  return response.data;
};
