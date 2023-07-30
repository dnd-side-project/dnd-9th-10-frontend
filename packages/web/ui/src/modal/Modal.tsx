import cn from "classnames";
import IconButton from "../button/IconButton";
import styles from "./Modal.module.css";

export interface ModalProps {
  className?: string;
  children: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const { className, children } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <IconButton className={styles["close-button"]} name="close" />
      {children}
    </div>
  );
}

export default Modal;
