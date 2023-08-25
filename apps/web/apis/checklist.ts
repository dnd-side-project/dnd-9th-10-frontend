import { axiosInstance } from "../libs/axios";

import {
  EditMemberChecklistRequest,
  CreateMemberChecklistRequest,
  DefaultApiFactory,
} from "@dnd9-10/shared/src/__generate__/member/api";

const factory = DefaultApiFactory(undefined, undefined, axiosInstance);

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

export const updateChecklist = async (payload?: EditMemberChecklistRequest) => {
  const response = await factory.editChecklistUsingPATCH(payload);
  return response.data;
};
