import { axiosInstance } from "../libs/axios";

import {
  ChecklistInfoRequestDto,
  MockApiFactory,
} from "@dnd9-10/shared/src/__generate__/api/api";

import {
  DefaultApiFactory,
  MemberChecklistRequestDto,
} from "@dnd9-10/shared/src/__generate__/member/api";

const memberFactory = DefaultApiFactory(undefined, undefined, axiosInstance);
const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getBasicChecklist = async () => {
  try {
    const response = await memberFactory.getBasicChecklistUsingGET();
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

export const createChecklist = async (payload: MemberChecklistRequestDto) => {
  const response = await memberFactory.createChecklistUsingPOST(payload);
  return response.data;
};

export const updateChecklist = async (payload: ChecklistInfoRequestDto) => {
  const response = await factory.updateChecklistUsingPATCH(payload);
  return response.data;
};
