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
import Emoji1 from "./emoji/icon1";
import Emoji2 from "./emoji/icon2";
import Emoji3 from "./emoji/icon3";
import Emoji4 from "./emoji/icon4";
import Emoji5 from "./emoji/icon5";
import Emoji6 from "./emoji/icon6";

export const emojiIcons = {
  emoji1: Emoji1,
  emoji2: Emoji2,
  emoji3: Emoji3,
  emoji4: Emoji4,
  emoji5: Emoji5,
  emoji6: Emoji6,
} as const;

export const svgIcons = {
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
} as const;

export const reactIcons = { ...emojiIcons, ...svgIcons } as const;
