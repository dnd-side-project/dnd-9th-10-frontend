import cn from "classnames";
import { useCallback, useState } from "react";
import Button from "../button/Button";
import SubmitButton from "../button/SubmitButton";
import SelectFriendSelectbox from "../selectbox/SelectFriendSelectbox";
import { Bold20 } from "../text/Typographies";
import Modal from "./Modal";
import styles from "./SelectFriendModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";

export interface SelectFriendModalProps {
  className?: string;
}

export function SelectFriendModal(props: SelectFriendModalProps) {
  const { className } = props;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelected = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <Modal
      TriggerComponent={
        <Button className={styles["trigger-button"]}>친구생성</Button>
      }
      className={cn(styles.wrap, className)}
    >
      <>
        <Bold20>친구의 캐릭터를 선택해주세요</Bold20>
        <div className={styles["content"]}>
          <SelectFriendSelectbox
            selectedIndex={selectedIndex}
            onSelected={handleSelected}
          />
        </div>
        <Dialog.Close asChild>
          <SubmitButton name="확인" />
        </Dialog.Close>
      </>
    </Modal>
  );
}

export default SelectFriendModal;
