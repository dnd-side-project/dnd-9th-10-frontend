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
