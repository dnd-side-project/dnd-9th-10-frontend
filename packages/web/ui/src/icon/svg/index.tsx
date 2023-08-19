import ArrowDown from "./arrow_down";
import ArrowUp from "./arrow_up";
import IconBack from "./back_icon";
import Back from "./back";
import BookmarkActive from "./bookmark_active";
import Bookmark from "./bookmark";
import BrokenHeart from "./broken_heart";
import Checked from "./checked";
import Close from "./close";
import Diary from "./diary";
import Forward from "./forward";
import Heart from "./heart";
import Home from "./home";
import Modify from "./modify";
import My from "./my";
import Plus from "./plus";
import Remove from "./remove";
import Search from "./search";
import Setting from "./setting";
import Sticker from "./sticker";
import Tooltip from "./tooltip";
import Logo from "./logo";
import Warn from "./warn";
import Profile from "./profile";
import Emoji1 from "./emoji/icon1";
import Emoji2 from "./emoji/icon2";
import Emoji3 from "./emoji/icon3";
import Emoji4 from "./emoji/icon4";
import Emoji5 from "./emoji/icon5";
import Emoji6 from "./emoji/icon6";

import Emoji1Disabled from "./emoji/icon1_disabled";
import Emoji2Disabled from "./emoji/icon2_disabled";
import Emoji3Disabled from "./emoji/icon3_disabled";
import Emoji4Disabled from "./emoji/icon4_disabled";
import Emoji5Disabled from "./emoji/icon5_disabled";
import Emoji6Disabled from "./emoji/icon6_disabled";

export const emojiIcons = {
  emoji1: Emoji1,
  emoji2: Emoji2,
  emoji3: Emoji3,
  emoji4: Emoji4,
  emoji5: Emoji5,
  emoji6: Emoji6,
  emoji1_disabled: Emoji1Disabled,
  emoji2_disabled: Emoji2Disabled,
  emoji3_disabled: Emoji3Disabled,
  emoji4_disabled: Emoji4Disabled,
  emoji5_disabled: Emoji5Disabled,
  emoji6_disabled: Emoji6Disabled,
} as const;

export const svgIcons = {
  arrow_down: ArrowDown,
  arrow_up: ArrowUp,
  icon_back: IconBack,
  back: Back,
  bookmark_active: BookmarkActive,
  bookmark: Bookmark,
  broken_heart: BrokenHeart,
  checked: Checked,
  close: Close,
  diary: Diary,
  forward: Forward,
  heart: Heart,
  home: Home,
  modify: Modify,
  my: My,
  plus: Plus,
  remove: Remove,
  search: Search,
  setting: Setting,
  sticker: Sticker,
  tooltip: Tooltip,
  logo: Logo,
  warn: Warn,
  profile: Profile
} as const;

export const reactIcons = { ...emojiIcons, ...svgIcons } as const;
