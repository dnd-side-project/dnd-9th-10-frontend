import { axiosInstance } from "../libs/axios";

import {
  ChecklistInfoRequestDto,
  MockApiFactory,
} from "@dnd9-10/shared/src/__generate__/api/api";

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getChecklist = async () => {
  const response = await factory.getChecklistUsingGET();

  return response.data?.data ?? { badChecklist: [], goodChecklist: [] };
};

export const updateChecklist = async (payload: ChecklistInfoRequestDto) => {
  const response = await factory.updateChecklistUsingPATCH(payload);
  return response.data;
};
