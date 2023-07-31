import cn from "classnames";
import IconButton from "../button/IconButton";
import styles from "./Modal.module.css";
import * as Dialog from "@radix-ui/react-dialog";

export interface ModalProps {
  className?: string;
  TriggerComponent: React.ReactNode;
  children: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const { className, TriggerComponent, children } = props;
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>{TriggerComponent}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.DialogOverlay} />
          <Dialog.Content className={styles.DialogContent}>
            <div className={cn(styles.wrap, className)}>
              <Dialog.Close asChild>
                <IconButton className={styles["close-button"]} name="close" />
              </Dialog.Close>
              {children}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default Modal;
