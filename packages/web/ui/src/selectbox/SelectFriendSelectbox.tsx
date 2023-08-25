import cn from "classnames";
import styles from "./SelectFriendSelectbox.module.css";

import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";
import { Medium15 } from "../text/Typographies";
import { useCallback } from "react";
import Radiobox from "../checkbox/Radiobox";
import { GetBbokCharacterResponse } from "@dnd9-10/shared/src/__generate__/member/api";

export interface SelectFriendSelectboxProps {
  className?: string;
  characters: GetBbokCharacterResponse[];
  selectedIndex: number;
  onSelected: (index: number) => void;
}

export function SelectFriendSelectbox(props: SelectFriendSelectboxProps) {
  const { className, characters, selectedIndex, onSelected } = props;

  const handleSelected = useCallback(
    (index: number) => () => {
      onSelected(index);
    },
    [onSelected]
  );

  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles.content}>
        {characters.map((item, index) => {
          const { iconUrl, name } = item;
          return (
            <div
              key={index}
              className={styles["item-group"]}
              onClick={handleSelected(index)}
            >
              <div
                className={cn(styles.item, {
                  [styles["active-item"]]: selectedIndex === index,
                })}
              >
                <Image
                  width={109}
                  height={78}
                  alt="item"
                  src={iconUrl ?? images.FRIEND1}
                />
                <div className={styles["check-group"]}>
                  <Radiobox checked={selectedIndex === index} />
                </div>
              </div>
              <Medium15 className={styles["item-title"]}>{name}</Medium15>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectFriendSelectbox;
