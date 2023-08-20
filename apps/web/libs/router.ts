import { ERROR_STATUSES, ERROR_STATUS_VALUES } from "./error";

export const redirectSigninIf401 = (status: ERROR_STATUS_VALUES) => {
  if (status === ERROR_STATUSES.Unauthorized) {
    window.location.href = "/account/signin?errorStatus=401";
    return;
  }
};
