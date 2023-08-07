import * as Dialog from "@radix-ui/react-dialog";
import cn from "classnames";
import Button from "../button/Button";
import SubmitButton from "../button/SubmitButton";
import { Bold20, Medium14 } from "../text/Typographies";
import styles from "./DeleteThingsModal.module.css";
import Modal from "./Modal";

export interface DeleteThingsModalProps {
  className?: string;
  description: string;
  TriggerComponent: React.ReactNode;
  onClose?: () => void
  onSubmit?: () => void
}

export function DeleteThingsModal(props: DeleteThingsModalProps) {
  const { className, TriggerComponent, description, onClose, onSubmit } = props;
  return (
    <Modal
      TriggerComponent={TriggerComponent}
      className={cn(styles.wrap, className)}
      useClose={false}
    >
      <>
        <Bold20 className={styles.title}>정말 삭제하시겠어요?</Bold20>
        <Medium14
          className={styles["content"]}
          as="pre"
        >{description}</Medium14>
        <Dialog.Close asChild>
          <div className={styles.bottom}>
            <SubmitButton
              className={styles["bottom-button"]}
              type="disabled"
              name="취소"
              onClick={onClose}
            />
            <SubmitButton
              className={styles["bottom-button"]}
              type="warn"
              name="삭제"
              onClick={onSubmit}
            />
          </div>
        </Dialog.Close>
      </>
    </Modal>
  );
}

export default DeleteThingsModal;
