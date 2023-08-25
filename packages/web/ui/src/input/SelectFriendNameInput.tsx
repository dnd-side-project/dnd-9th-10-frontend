import cn from "classnames";
import styles from "./SelectFriendNameInput.module.css";
import { images } from "@dnd9-10/shared/src/libs/images";
import TextInput from "./TextInput";
import { Regular13 } from "../text/Typographies";
import Image from "next/image";
import Icon from "../icon/Icon";
import InfoText from "../text/InfoText";
import React from "react";
import { GetBbokCharacterResponse } from "@dnd9-10/shared/src/__generate__/member";

export interface SelectFriendNameInputProps {
  className?: string;
  character: GetBbokCharacterResponse;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SelectFriendNameInput(props: SelectFriendNameInputProps) {
  const { className, character, value, onChange } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles["friend-profile"]}>
        <Image width={109} height={78} alt="friend" src={character.iconUrl ?? images.FRIEND1} />
      </div>
      <TextInput
        className={styles.input}
        inputProps={{
          value,
          onChange,
          placeholder: "이름을 입력하세요.",
        }}
      />
      <InfoText>한글 또는 영문, 숫자의 조합으로 12자 이내</InfoText>
    </div>
  );
}

export default SelectFriendNameInput;
