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
import cn from "classnames";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import BasedMyCheckList from "@dnd9-10/webui/src/checklist/BasedMyCheckList";

export default function Page() {
  const router = useRouter();

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
          data={["test", "test"]}
        />
        <BasedMyCheckList
          className={styles.checklist}
          type="good"
          data={["test", "test"]}
        />
      </div>
    </div>
  );
}
