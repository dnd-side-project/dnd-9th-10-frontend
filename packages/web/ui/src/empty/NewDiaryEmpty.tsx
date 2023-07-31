import cn from "classnames";
import styles from "./NewDiaryEmpty.module.css";

import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";
import { Bold20, Regular15 } from "../text/Typographies";
import { Button } from "../button/Button";
import SelectFriendModal from "../modal/SelectFriendModal";

export interface NewDiaryEmptyProps {
  className?: string;
}

export function NewDiaryEmpty(props: NewDiaryEmptyProps) {
  const { className } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Image
        width={180}
        height={160}
        alt="empty"
        src={images.NEW_DIARY_EMPTY}
      />
      <Bold20 className={styles["title"]}>일화를 추가해 보세요</Bold20>
      <Regular15 className={styles["subtitle"]} as="pre">
        {`친구에게 화났던 일, 실망했던 일 등
비밀스러운 이야기도 괜찮아요`}
      </Regular15>
    </div>
  );
}

export default NewDiaryEmpty;
