import cn from "classnames";
import styles from "./ChangedThingsModal.module.css";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "../button/Button";
import SubmitButton from "../button/SubmitButton";
import { Bold20, Medium14 } from "../text/Typographies";
import Modal from "./Modal";

export interface ChangedThingsModalProps {
  className?: string;
}

export function ChangedThingsModal(props: ChangedThingsModalProps) {
  const { className } = props;
  return (
    <Modal
      TriggerComponent={
        <Button className={styles["trigger-button"]}>친구생성</Button>
      }
      className={cn(styles.wrap, className)}
    >
      <>
        <Bold20 className={styles.title}>기준을 변경을 하시겠어요?</Bold20>
        <Medium14
          className={styles["content"]}
          as="pre"
        >{`기준을 변경하면 기존에 체크한 
일화의 기준들은 자동으로 변경되지 않아요.`}</Medium14>
        <Dialog.Close asChild>
          <div className={styles.bottom}>
            <SubmitButton
              className={styles["bottom-button"]}
              type="disabled"
              name="취소"
            />
            <SubmitButton className={styles["bottom-button"]} name="변경" />
          </div>
        </Dialog.Close>
      </>
    </Modal>
  );
}

export default ChangedThingsModal;
