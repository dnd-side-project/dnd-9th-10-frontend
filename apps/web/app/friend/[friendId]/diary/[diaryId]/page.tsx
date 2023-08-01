"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import {
  Bold22,
  Medium14,
  Medium16,
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import Icon from "@dnd9-10/webui/src/icon/Icon";

import { DiaryContentCard } from "@dnd9-10/webui/src/card/DiaryContentCard";

export default function Page() {
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className={styles.wrap}>
      <Topbar title={"23.07.18"} onBackClick={handleBackClick} />
      <div className={styles.content}>
        <Icon name="emoji1" />
        <DiaryContentCard />
        <div className={styles.tags}>tags</div>
      </div>
    </div>
  );
}
