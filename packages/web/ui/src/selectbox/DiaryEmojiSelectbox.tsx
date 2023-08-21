import cn from "classnames";
import styles from "./DiaryEmojiSelectbox.module.css";
import { Semibold18 } from "../text/Typographies";
import IconButton from "../button/IconButton";
import { useCallback, useState } from "react";

export type EmojiType =
  | "emoji1"
  | "emoji2"
  | "emoji3"
  | "emoji4"
  | "emoji5"
  | "emoji6";

export interface DiaryEmojiSelectboxProps {
  className?: string;
  defaultSelected?: EmojiType;
  onSelected: (selected: EmojiType) => void;
}

export function DiaryEmojiSelectbox(props: DiaryEmojiSelectboxProps) {
  const { className, defaultSelected, onSelected } = props;
  const [selected, setSelected] = useState(defaultSelected ?? "emoji1");

  const handleSelected = useCallback(
    (selected: EmojiType) => () => {
      setSelected(selected);
      onSelected(selected);
    },
    [onSelected]
  );

  return (
    <div className={cn(styles.wrap, className)}>
      <IconButton
        size={42}
        name={selected === "emoji1" ? "emoji1" : "emoji1_disabled"}
        onClick={handleSelected("emoji1")}
      />
      <IconButton
        size={42}
        name={selected === "emoji2" ? "emoji2" : "emoji2_disabled"}
        onClick={handleSelected("emoji2")}
      />
      <IconButton
        size={42}
        name={selected === "emoji3" ? "emoji3" : "emoji3_disabled"}
        onClick={handleSelected("emoji3")}
      />
      <IconButton
        size={42}
        name={selected === "emoji4" ? "emoji4" : "emoji4_disabled"}
        onClick={handleSelected("emoji4")}
      />
      <IconButton
        size={42}
        name={selected === "emoji5" ? "emoji5" : "emoji5_disabled"}
        onClick={handleSelected("emoji5")}
      />
      <IconButton
        size={42}
        name={selected === "emoji6" ? "emoji6" : "emoji6_disabled"}
        onClick={handleSelected("emoji6")}
      />
    </div>
  );
}

export default DiaryEmojiSelectbox;
