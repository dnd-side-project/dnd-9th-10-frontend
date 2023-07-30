import cn from "classnames";
import { useCallback, useState } from "react";
import SubmitButton from "../button/SubmitButton";
import SelectFriendSelectbox from "../selectbox/SelectFriendSelectbox";
import { Bold20 } from "../text/Typographies";
import Modal from "./Modal";
import styles from "./SelectFriendModal.module.css";

export interface SelectFriendModalProps {
  className?: string;
}

export function SelectFriendModal(props: SelectFriendModalProps) {
  const { className } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelected = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <Modal className={cn(styles.wrap, className)}>
      <Bold20>친구의 캐릭터를 선택해주세요</Bold20>
      <div className={styles["content"]}>
        <SelectFriendSelectbox
          selectedIndex={selectedIndex}
          onSelected={handleSelected}
        />
      </div>
      <SubmitButton name="확인" />
    </Modal>
  );
}

export default SelectFriendModal;
