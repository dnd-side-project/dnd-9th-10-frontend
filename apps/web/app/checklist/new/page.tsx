"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { Topbar } from "@dnd9-10/webui/src/topbar/Topbar";
import { CheckList } from "@dnd9-10/webui/src/checklist/CheckList";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import { StepIndicator } from "@dnd9-10/webui/src/indicator/StepIndicator";
import { Bold22, Normal14 } from "@dnd9-10/webui/src/text/Typographies";

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
      <div className={styles.header}>
        <StepIndicator current={1} totalCount={2} />
        <Bold22>{`내 기준에서 벗어난
친구 유형을 알려주세요`}</Bold22>
        <Normal14>{`최대 5개 선택 가능`}</Normal14>
      </div>
      <div className={styles.content}>
        <CheckList data={[{ name: "test" }]} />
      </div>
      <SubmitButton name="작성완료" />
    </div>
  );
}
