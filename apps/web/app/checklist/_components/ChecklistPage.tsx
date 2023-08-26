"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import cn from "classnames";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import BasedMyCheckList from "@dnd9-10/webui/src/checklist/BasedMyCheckList";
import { useQuery } from "@tanstack/react-query";
import { getFriendChecklist } from "../../../apis/checklist";

export default function ChecklistPage() {
  const firendChecklistResponse = useQuery(
    ["getFriendChecklist"],
    getFriendChecklist
  );
  const data = firendChecklistResponse?.data ?? {};
  const router = useRouter();
  const badChecklist = data?.badChecklist ?? [];
  const goodChecklist = data?.goodChecklist ?? [];

  const handleBackOrHome = useCallback(
    (e: React.MouseEvent) => {
      router.replace("/");
    },
    [router]
  );

  return (
    <div className={styles.wrap}>
      <Topbar title="내가 선택한 기준" onBackClick={handleBackOrHome} />
      <div className={styles.content}>
        <BasedMyCheckList
          className={cn(styles["bad-checklist"], styles.checklist)}
          type="bad"
          data={badChecklist.map((item) => item.criteria)}
        />
        <BasedMyCheckList
          className={styles.checklist}
          type="good"
          data={goodChecklist.map((item) => item.criteria)}
        />
      </div>
    </div>
  );
}
