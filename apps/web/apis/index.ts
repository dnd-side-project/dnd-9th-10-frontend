import { redirectSigninIf401 } from "../libs/router";

export const enhancedAuthorization = <T extends (...args: any[]) => any>(
  func: T
) =>
  (async (...args) => {
    try {
      return await func(...args);
    } catch (error: any) {
      console.error({
        error,
      });
      redirectSigninIf401(error.response?.status);
      throw error;
    }
  }) as T;
