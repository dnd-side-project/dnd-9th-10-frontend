import cn from "classnames";
import styles from "./NewDiaryEmojiSelectbox.module.css";
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

export interface NewDiaryEmojiSelectboxProps {
  className?: string;
  defaultSelected?: EmojiType;
  onSelected: (selected: EmojiType) => void;
}

export function NewDiaryEmojiSelectbox(props: NewDiaryEmojiSelectboxProps) {
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
      <Semibold18 className={styles.title}>
        쓸 일화의 감정은 어떠신가요?
      </Semibold18>
      <div className={styles.content}>
        <IconButton
          name={selected === "emoji1" ? "emoji1" : "emoji1_disabled"}
          onClick={handleSelected("emoji1")}
        />
        <IconButton
          name={selected === "emoji2" ? "emoji2" : "emoji2_disabled"}
          onClick={handleSelected("emoji2")}
        />
        <IconButton
          name={selected === "emoji3" ? "emoji3" : "emoji3_disabled"}
          onClick={handleSelected("emoji3")}
        />
        <IconButton
          name={selected === "emoji4" ? "emoji4" : "emoji4_disabled"}
          onClick={handleSelected("emoji4")}
        />
        <IconButton
          name={selected === "emoji5" ? "emoji5" : "emoji5_disabled"}
          onClick={handleSelected("emoji5")}
        />
        <IconButton
          name={selected === "emoji6" ? "emoji6" : "emoji6_disabled"}
          onClick={handleSelected("emoji6")}
        />
      </div>
    </div>
  );
}

export default NewDiaryEmojiSelectbox;
