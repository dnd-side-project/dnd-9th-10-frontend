"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomTabs,
} from "@dnd9-10/webui/src/navigation/BottomNavigation";
import { FriendEmpty } from "@dnd9-10/webui/src/empty/FriendEmpty";
import styles from "./page.module.css";
import { Bold22, Medium15 } from "@dnd9-10/webui/src/text/Typographies";
import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";
import { Button } from "@dnd9-10/webui/src/button/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { ProfileCard } from "@dnd9-10/webui/src/card/ProfileCard";

export default function Page() {
  const router = useRouter();
  const searchParam = useSearchParams();

  const handleAdd = useCallback(() => {
    router.push(`/friend/${1}/diary/new`);
  }, [router]);

  const handleSelected = useCallback((tab: BottomTabs) => {
    if (tab === "home") {
      router.replace("/");
      return;
    }
    router.replace("/my");
  }, [router]);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.section}>
          <Bold22 className={styles["section-title"]}>내 정보</Bold22>
          <div className={styles["section-content"]}>
            <ProfileCard />
          </div>
        </div>
        <ul className={styles.list}>
          <Medium15 as="li">글귀/명언 북마크</Medium15>
          <Medium15 as="li">회원가입/로그인</Medium15>
          <Medium15 as="li">서비스 문의</Medium15>
        </ul>
      </div>
      <div className={styles.bottom}>
        <BottomNavigation
          active={"my"}
          onAdd={handleAdd}
          onSelected={handleSelected}
        />
      </div>
    </div>
  );
}
