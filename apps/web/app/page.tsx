"use client";

import { useCallback, useEffect, useState } from "react";
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
import { Carousel } from "@dnd9-10/webui/src/carousel/Carousel";
import { FriendCard } from "@dnd9-10/webui/src/card/FriendCard";
import { NewFriendCard } from "@dnd9-10/webui/src/card/NewFriendCard";
import CircularIndicator from "@dnd9-10/webui/src/indicator/CircularIndicator";

export default function Page() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const tab = (searchParam.get("tab") as BottomTabs) ?? "home";
  const [page, setPage] = useState(0);
  const totalCount = 3;

  usePwa();

  const handlePagination = useCallback((page: number) => {
    setPage(page);
  }, []);

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
            <Carousel onPagination={handlePagination}>
              <div className={styles["friend-item"]}>
                <FriendEmpty />
              </div>
              <div className={styles["friend-item"]}>
                <FriendCard
                  statusText="12일째 작성 중"
                  name="김도리"
                  diaryCount={10}
                />
              </div>
              <div className={styles["friend-item"]}>
                <NewFriendCard />
              </div>
            </Carousel>
            <CircularIndicator
              className={styles['friend-indicator']}
              current={page}
              totalCount={totalCount}
            />
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
