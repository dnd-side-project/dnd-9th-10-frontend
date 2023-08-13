import { DATE_TIME_FORMAT, DATE_TIME_FORMAT7 } from './datetime-format';
import dateFnsParse from 'date-fns/parse';
import getMinutes from 'date-fns/getMinutes';
import dateFnsFormat from 'date-fns/format';
import ko from 'date-fns/locale/ko';
import enUS from 'date-fns/locale/en-US';

const locales = { enUS, ko } as const;

type LocaleIdType = keyof typeof locales;
export type DateTimeFormatModule = typeof import('./datetime-format');
export type DateTimeFormatType =
  DateTimeFormatModule[keyof DateTimeFormatModule];

const defaultLocaleId: LocaleIdType = 'ko';

export const parseDateFns = (
  dateTime: string,
  format: DateTimeFormatType = DATE_TIME_FORMAT
) => {
  return dateFnsParse(dateTime, format, new Date(), {
    locale: locales[defaultLocaleId],
  });
};

export const parseDate = (dateTime: string) => {
  return new Date(dateTime);
};

export const transformDateTimeStrToText = (
  datetimeStr: string,
  format: DateTimeFormatType = DATE_TIME_FORMAT
) => {
  return toDateTimeText(parseDate(datetimeStr), format);
};

export const toDateTimeText = (
  datetime: number | Date,
  format: DateTimeFormatType = DATE_TIME_FORMAT
) => {
  return dateFnsFormat(datetime, format, {
    locale: locales[defaultLocaleId],
  });
};

export const today = () => {
  return new Date();
};

export const todayFormat = (format: DateTimeFormatType = DATE_TIME_FORMAT) => {
  return toDateTimeText(new Date(), format);
};

export const yesterday = () => {
  return new Date(new Date().valueOf() - 24 * 60 * 60 * 1000);
};

export const todayTime = () => {
  return new Date().getTime();
};

export const durationDays = (start: Date, end: Date) => {
  const startDateNum = Number(toDateTimeText(start, DATE_TIME_FORMAT7));
  const endDateNum = Number(toDateTimeText(end, DATE_TIME_FORMAT7));
  return endDateNum - startDateNum;
};

export const durationDaysByTime = (start: number, end: number) => {
  const startDateNum = Number(toDateTimeText(start, DATE_TIME_FORMAT7));
  const endDateNum = Number(toDateTimeText(end, DATE_TIME_FORMAT7));
  return endDateNum - startDateNum;
};

export const durationMinutesByTime = (start: number, end: number) => {
  return getMinutes(end) - getMinutes(start);
};
