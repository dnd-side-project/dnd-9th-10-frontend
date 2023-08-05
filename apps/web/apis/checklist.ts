import { axiosInstance } from "../libs/axios";

import { MockApiFactory } from "../__generate__/api";

const factory = MockApiFactory(undefined, undefined, axiosInstance);

export const getBasicChecklist = async () => {
  const response = await factory.getBasicChecklistUsingGET();
  return response.data;
};
