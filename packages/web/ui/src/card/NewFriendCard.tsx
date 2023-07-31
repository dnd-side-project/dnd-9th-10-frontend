import cn from "classnames";
import styles from "./NewFriendCard.module.css";
import { images } from "@dnd9-10/shared/src/libs/images";
import Image from "next/image";
import { Medium14 } from "../text/Typographies";

export interface NewFriendCardProps {
  className?: string;
}

export function NewFriendCard(props: NewFriendCardProps) {
  const { className } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Image
        className={styles.image}
        width={130}
        height={130}
        alt="new"
        src={images.NEW_FRIEND_BG}
      />
      <Medium14 className={styles.description}>
        {`김도리와 관계정리 후
다른 친구를 추가할 수 있어요`}
      </Medium14>
    </div>
  );
}

export default NewFriendCard;
