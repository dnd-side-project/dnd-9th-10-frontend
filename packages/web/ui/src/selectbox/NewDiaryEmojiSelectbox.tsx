import cn from "classnames";
import styles from "./NewDiaryEmojiSelectbox.module.css";
import { Semibold18 } from "../text/Typographies";
import IconButton from "../button/IconButton";

export interface NewDiaryEmojiSelectboxProps {
  className?: string;
}

export function NewDiaryEmojiSelectbox(props: NewDiaryEmojiSelectboxProps) {
  const { className } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Semibold18 className={styles.title}>
        쓸 일화의 감정은 어떠신가요?
      </Semibold18>
      <div className={styles.content}>
        <IconButton name="emoji1" />
        <IconButton name="emoji2" />
        <IconButton name="emoji3" />
        <IconButton name="emoji4" />
        <IconButton name="emoji5" />
        <IconButton name="emoji6" />
      </div>
    </div>
  );
}

export default NewDiaryEmojiSelectbox;
