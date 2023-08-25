import { GetDiaryResponseEmojiEnum } from "../__generate__/member";

export type EmojiType =
  | "emoji1"
  | "emoji2"
  | "emoji3"
  | "emoji4"
  | "emoji5"
  | "emoji6";

export const EmojiEnumByType: Record<EmojiType, GetDiaryResponseEmojiEnum> = {
  emoji1: GetDiaryResponseEmojiEnum.Calm,
  emoji2: GetDiaryResponseEmojiEnum.Happy,
  emoji3: GetDiaryResponseEmojiEnum.Displeased,
  emoji4: GetDiaryResponseEmojiEnum.Panic,
  emoji5: GetDiaryResponseEmojiEnum.Angry,
  emoji6: GetDiaryResponseEmojiEnum.Sad,
};

export const EmojiTypeByEnum: Record<GetDiaryResponseEmojiEnum, EmojiType> = {
  [GetDiaryResponseEmojiEnum.Calm]: 'emoji1',
  [GetDiaryResponseEmojiEnum.Happy]: 'emoji2',
  [GetDiaryResponseEmojiEnum.Displeased]: 'emoji3',
  [GetDiaryResponseEmojiEnum.Panic]: 'emoji4',
  [GetDiaryResponseEmojiEnum.Angry]: 'emoji5',
  [GetDiaryResponseEmojiEnum.Sad]: 'emoji6',
};
