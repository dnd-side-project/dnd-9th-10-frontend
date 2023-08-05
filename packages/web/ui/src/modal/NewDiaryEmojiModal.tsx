import cn from "classnames";
import styles from "./NewDiaryEmojiModal.module.css";
import Topbar from "../topbar/Topbar";
import IconButton from "../button/IconButton";
import SubmitButton from "../button/SubmitButton";
import NewDiaryEmojiSelectbox, {
  EmojiType,
} from "../selectbox/NewDiaryEmojiSelectbox";
import { useCallback, useState } from "react";

export interface NewDiaryEmojiModalProps {
  className?: string;
  onClose: () => void;
  onSubmit: (selected: EmojiType) => void;
}

export function NewDiaryEmojiModal(props: NewDiaryEmojiModalProps) {
  const { className, onClose, onSubmit } = props;
  const [selected, setSelected] = useState<EmojiType | undefined>();

  const handleSelected = useCallback((selected: EmojiType) => {
    setSelected(selected);
  }, []);

  return (
    <div className={cn(styles.wrap, className)}>
      <Topbar
        RightComponent={
          <IconButton
            className={styles["close-button"]}
            name="close"
            onClick={onClose}
          />
        }
      />
      <div className={styles.content}>
        <NewDiaryEmojiSelectbox
          defaultSelected={selected}
          onSelected={handleSelected}
        />
      </div>
      <div className={styles.bottom}>
        <SubmitButton name="다음" />
      </div>
    </div>
  );
}

export default NewDiaryEmojiModal;
