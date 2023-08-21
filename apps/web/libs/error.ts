export const ERROR_STATUSES = {
  Unauthorized: 401,
  InternalServer: 500,
} as const;

export const ERROR_MESSAGE_BY_CODE: Record<ERROR_STATUS_VALUES, string> = {
  [ERROR_STATUSES.Unauthorized]: "액세스 토큰 만료되었습니다.",
  [ERROR_STATUSES.InternalServer]: "서버 에러입니다. 서버에 문의해주세요.",
};

export type ERROR_STATUS_KEYS = keyof typeof ERROR_STATUSES;
export type ERROR_STATUS_VALUES = (typeof ERROR_STATUSES)[ERROR_STATUS_KEYS];
