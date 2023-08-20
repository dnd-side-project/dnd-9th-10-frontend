export const ERROR_STATUSES = {
  Unauthorized: 401,
} as const;

export type ERROR_STATUS_KEYS = keyof typeof ERROR_STATUSES;
export type ERROR_STATUS_VALUES = (typeof ERROR_STATUSES)[ERROR_STATUS_KEYS];
