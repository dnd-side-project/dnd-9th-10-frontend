"use client";

import { useCallback, useEffect } from "react";
import { BottomNavigation } from "@dnd9-10/webui/src/navigation/BottomNavigation";
import { FriendEmpty } from "@dnd9-10/webui/src/empty/FriendEmpty";
import styles from "./page.module.css";
import usePwa from "../hooks/usePwa";
import { Bold22 } from "@dnd9-10/webui/src/text/Typographies";

export default function Page() {
  usePwa();

  const handleAdd = useCallback(() => {}, []);

  const handleSelected = useCallback(() => {}, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.section}>
          <Bold22 className={styles["section-title"]}>친구 선택</Bold22>
          <div className={styles["section-content"]}>
            <FriendEmpty />
          </div>
        </div>
        <div className={styles.section}>
          <Bold22 className={styles["section-title"]}>나의 친구 기준</Bold22>
          <div className={styles["section-content"]}>test</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <BottomNavigation onAdd={handleAdd} onSelected={handleSelected} />
      </div>
    </div>
  );
}
