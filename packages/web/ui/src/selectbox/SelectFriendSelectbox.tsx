import cn from "classnames";
import styles from "./SelectFriendSelectbox.module.css";

import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";
import { Medium15 } from "../text/Typographies";
import { useCallback } from "react";
import Radiobox from "../checkbox/Radiobox";

export interface SelectFriendSelectboxProps {
  className?: string;
  selectedIndex: number;
  onSelected: (index: number) => void;
}

export function SelectFriendSelectbox(props: SelectFriendSelectboxProps) {
  const { className, selectedIndex, onSelected } = props;

  const handleSelected = useCallback(
    (index: number) => () => {
      onSelected(index);
    },
    [onSelected]
  );

  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles.content}>
        <div className={styles["item-group"]} onClick={handleSelected(0)}>
          <div
            className={cn(styles.item, {
              [styles["active-item"]]: selectedIndex === 0,
            })}
          >
            <Image width={109} height={78} alt="item" src={images.FRIEND1} />
            <div className={styles["check-group"]}>
              <Radiobox checked={selectedIndex === 0} />
            </div>
          </div>
          <Medium15 className={styles["item-title"]}>뾰족뾰족 고스미</Medium15>
        </div>
        <div className={styles["item-group"]} onClick={handleSelected(1)}>
          <div
            className={cn(styles.item, {
              [styles["active-item"]]: selectedIndex === 1,
            })}
          >
            <Image width={109} height={78} alt="item" src={images.FRIEND2} />
            <div className={styles["check-group"]}>
              <Radiobox checked={selectedIndex === 1} />
            </div>
          </div>
          <Medium15 className={styles["item-title"]}>삐쭉삐쭉 인장이</Medium15>
        </div>
      </div>
    </div>
  );
}

export default SelectFriendSelectbox;
