import cn from "classnames";
import styles from "./FriendEmpty.module.css";

import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";
import { Bold20, Regular15 } from "../text/Typographies";
import { Button } from "../button/Button";
import SelectFriendModal from "../modal/SelectFriendModal";
import { BbokCharacterDto } from "@dnd9-10/shared/src/__generate__/api";

export interface FriendEmptyProps {
  className?: string;
  characters: BbokCharacterDto[]
}

export function FriendEmpty(props: FriendEmptyProps) {
  const { className, characters } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Image width={180} height={160} alt="empty" src={images.FRIEND_EMPTY} />
      <Bold20 className={styles["title"]}>등록된 친구가 아직 없어요!</Bold20>
      <Regular15 className={styles["subtitle"]} as="pre">
        {`친구를 등록하고 일화를 작성하여
생각을 정리 해 보세요.`}
      </Regular15>
      <SelectFriendModal characters={characters}  />
    </div>
  );
}

export default FriendEmpty;
