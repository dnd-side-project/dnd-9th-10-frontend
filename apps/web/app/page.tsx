"use client";

import { useCallback, useEffect } from "react";
import {
  BottomNavigation,
  BottomTabs,
} from "@dnd9-10/webui/src/navigation/BottomNavigation";
import { FriendEmpty } from "@dnd9-10/webui/src/empty/FriendEmpty";
import styles from "./page.module.css";
import usePwa from "../hooks/usePwa";
import { Bold22 } from "@dnd9-10/webui/src/text/Typographies";
import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";
import { Button } from "@dnd9-10/webui/src/button/Button";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const tab = (searchParam.get("tab") as BottomTabs) ?? "home";

  usePwa();

  const handleAdd = useCallback(() => {}, []);

  const handleSelected = useCallback(() => {}, []);

  const handleBasedFriend = useCallback(() => {
    router.replace("/guides");
  }, [router]);

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
          <Button
            className={styles["section-content"]}
            onClick={handleBasedFriend}
          >
            <Image
              alt="based friend"
              width={335}
              height={96}
              src={images.BASED_FRIEND}
            />
          </Button>
        </div>
      </div>
      <div className={styles.bottom}>
        <BottomNavigation
          active={tab}
          onAdd={handleAdd}
          onSelected={handleSelected}
        />
      </div>
    </div>
  );
}
