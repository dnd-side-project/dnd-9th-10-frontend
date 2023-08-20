import cn from "classnames";
import React, { useCallback, useState } from "react";
import Button from "../button/Button";
import SubmitButton from "../button/SubmitButton";
import SelectFriendSelectbox from "../selectbox/SelectFriendSelectbox";
import { Bold20 } from "../text/Typographies";
import Modal from "./Modal";
import styles from "./SelectFriendModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import SelectFriendNameInput from "../input/SelectFriendNameInput";
import { BbokCharacterDto } from "@dnd9-10/shared/src/__generate__/member/api";

export interface SelectFriendModalProps {
  className?: string;
  characters: BbokCharacterDto[];
  onSubmit: (form: { name: string; character: BbokCharacterDto }) => void;
}

const CHARACTER_INDEX = 0;
const NAME_INDEX = 1;

export function SelectFriendModal(props: SelectFriendModalProps) {
  const { className, characters, onSubmit } = props;
  const [stepIndex, setStepIndex] = useState<number>(CHARACTER_INDEX);
  const isCharacterType = stepIndex === CHARACTER_INDEX;
  const [selectedCharacterIndex, setSelectedCharacterIndex] =
    useState<number>(0);
  const [name, setName] = useState("");

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const handleSelected = useCallback((index: number) => {
    setSelectedCharacterIndex(index);
  }, []);

  const ContentByStep: Array<{
    title: string;
    content: React.ReactNode;
  }> = [
    {
      title: "친구의 캐릭터를 선택해주세요",
      content: (
        <SelectFriendSelectbox
          characters={characters}
          selectedIndex={selectedCharacterIndex}
          onSelected={handleSelected}
        />
      ),
    },
    {
      title: "친구의 이름은 무엇인가요?",
      content: (
        <SelectFriendNameInput value={name} onChange={handleChangeName} />
      ),
    },
  ];

  const handleNext = useCallback(() => {
    setStepIndex(NAME_INDEX);
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit({
      character: characters[selectedCharacterIndex],
      name,
    });
  }, [characters, name, onSubmit, selectedCharacterIndex]);

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
        {isCharacterType ? (
          <div className={styles.bottom}>
            <SubmitButton name={"다음"} onClick={handleNext} />
          </div>
        ) : (
          <Dialog.Close asChild>
            <div className={styles.bottom}>
              <SubmitButton name={"확인"} onClick={handleSubmit} />
            </div>
          </Dialog.Close>
        )}
      </>
    </Modal>
  );
}

export default SelectFriendModal;
