"use client";

import { useRouter } from "next/navigation";
import { use, useCallback, useEffect, useState } from "react";
import { Topbar } from "@dnd9-10/webui/src/topbar/Topbar";
import { CheckList } from "@dnd9-10/webui/src/checklist/CheckList";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import { StepIndicator } from "@dnd9-10/webui/src/indicator/StepIndicator";
import { Bold22, Medium16 } from "@dnd9-10/webui/src/text/Typographies";

import styles from "./page.module.css";
import { BasicChecklistDto } from "@dnd9-10/shared/src/__generate__/member/api";
import { createChecklist } from "../../../../apis/checklist";
import { storage } from "../../../../libs/localStorage";

interface Props {
  data: BasicChecklistDto;
}

export default function ChecklistNewPage(props: Props) {
  const { data } = props;
  const router = useRouter();
  const [checklist, setChecklist] = useState(data?.badChecklist ?? []);

  const handleBackOrHome = useCallback(
    (e: React.MouseEvent) => {
      router.replace("/");
    },
    [router]
  );

  const handleAddItem = useCallback(() => {
    setChecklist((prev) => {
      return [...prev, ""];
    });
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      await createChecklist({
        badChecklist: checklist,
      });
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  }, [checklist, router]);

  return (
    <div className={styles.wrap}>
      <Topbar className={styles.topbar} onBackClick={handleBackOrHome} />
      <div className={styles.header}>
        <Bold22 className={styles.title} as="p">
          내 기준에서
          <span className={styles.highlight}> 벗어난 친구 유형</span>
          <br />
          5가지를 선택해주세요.
        </Bold22>
        <StepIndicator
          className={styles.indicator}
          current={1}
          totalCount={2}
        />
      </div>
      <div className={styles.content}>
        <CheckList data={[...(checklist?.map?.((name) => ({ name })) ?? [])]} />
        <SubmitButton
          className={styles["add-button"]}
          name="+ 기준 추가하기"
          onClick={handleAddItem}
        />
      </div>
      <div className={styles.bottom}>
        <SubmitButton
          className={styles.bottom}
          name="선택 완료"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
