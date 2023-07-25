"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { Topbar } from "@dnd9-10/webui/src/topbar/Topbar";
import { CheckList } from "@dnd9-10/webui/src/checklist/CheckList";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";

import styles from "./page.module.css";

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
      <Topbar title="test" onBackClick={handleBackOrHome} />
      <div className={styles.content}>
        <CheckList data={[{ name: "test" }]} />
      </div>
      <SubmitButton name='작성완료' />
    </div>
  );
}
