import { axiosInstance } from "../libs/axios";

import {
  ChecklistInfoRequestDto,
  MockApiFactory,
} from "@dnd9-10/shared/src/__generate__/api/api";

import {
  CreateMemberChecklistRequest,
  DefaultApiFactory,
} from "@dnd9-10/shared/src/__generate__/member/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);
const mockFactory = MockApiFactory(undefined, undefined, axiosInstance);

export const getBasicChecklist = async () => {
  try {
    const response = await factory.getBasicChecklistUsingGET();
    return response.data?.data ?? { badChecklist: [], goodChecklist: [] };
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const getFriendChecklist = async () => {
  try {
    const response = await factory.getChecklistUsingGET();
    return response.data?.data ?? { badChecklist: [], goodChecklist: [] };
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const createChecklist = async (
  payload: CreateMemberChecklistRequest
) => {
  const response = await factory.createChecklistUsingPOST(payload);
  return response.data;
};

export const updateChecklist = async (payload: ChecklistInfoRequestDto) => {
  const response = await mockFactory.updateChecklistUsingPATCH(payload);
  return response.data;
};
