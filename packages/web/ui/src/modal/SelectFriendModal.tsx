import cn from "classnames";
import { useCallback, useState } from "react";
import Button from "../button/Button";
import SubmitButton from "../button/SubmitButton";
import SelectFriendSelectbox from "../selectbox/SelectFriendSelectbox";
import { Bold20 } from "../text/Typographies";
import Modal from "./Modal";
import styles from "./SelectFriendModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import SelectFriendNameInput from "../input/SelectFriendNameInput";

export interface SelectFriendModalProps {
  className?: string;
}

export function SelectFriendModal(props: SelectFriendModalProps) {
  const { className } = props;
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelected = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const ContentByStep: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "친구의 캐릭터를 선택해주세요",
      content: (
        <SelectFriendSelectbox
          selectedIndex={selectedIndex}
          onSelected={handleSelected}
        />
      ),
    },
    {
      title: "친구의 이름은 무엇인가요?",
      content: <SelectFriendNameInput />,
    },
  ];
  const contentItem = ContentByStep[stepIndex];

  return (
    <Modal
      TriggerComponent={
        <Button className={styles["trigger-button"]}>친구생성</Button>
      }
      className={cn(styles.wrap, className)}
    >
      <>
        <Bold20>{contentItem.title}</Bold20>
        <div className={styles["content"]}>{contentItem.content}</div>
        <Dialog.Close asChild>
          <div className={styles.bottom}>
            <SubmitButton name="확인" />
          </div>
        </Dialog.Close>
      </>
    </Modal>
  );
}

export default SelectFriendModal;
