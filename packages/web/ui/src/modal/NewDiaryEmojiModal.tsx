import cn from "classnames";
import styles from "./NewDiaryEmojiModal.module.css";
import Topbar from "../topbar/Topbar";
import IconButton from "../button/IconButton";
import SubmitButton from "../button/SubmitButton";
import NewDiaryEmojiSelectbox from "../selectbox/NewDiaryEmojiSelectbox";

export interface NewDiaryEmojiModalProps {
  className?: string;
  onClose: () => void;
  onSubmit: () => void;
}

export function NewDiaryEmojiModal(props: NewDiaryEmojiModalProps) {
  const { className, onClose } = props;
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
        <NewDiaryEmojiSelectbox />
      </div>
      <div className={styles.bottom}>
        <SubmitButton name="다음" />
      </div>
    </div>
  );
}

export default NewDiaryEmojiModal;
