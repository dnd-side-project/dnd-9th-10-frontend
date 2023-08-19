"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import {
  Bold18,
  Bold22,
  Medium14,
  Medium16,
  Medium17,
  Semibold17,
  Semibold18,
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";
import Icon from "@dnd9-10/webui/src/icon/Icon";
import NewCheckList from "@dnd9-10/webui/src/checklist/NewCheckList";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import Button from "@dnd9-10/webui/src/button/Button";

import styles from "./page.module.css";
import { initializeClient } from "../../../../../../libs/client";

initializeClient();

export default function Page() {
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    router.back()
  }, [])

  return <div className={styles.wrap}>
    <Topbar
      title={<Semibold18 className={styles.title}>친구 기준</Semibold18>}
      RightComponent={
        <Button className={styles["submit-button"]}>
          <Medium17 className={styles["submit-button-text"]}>완료</Medium17>
        </Button>
      } onBackClick={handleBackClick} />
    <div className={styles.content}>
      <Bold18 className={styles.description}>이 일화에서 친구는
        <span className={styles.highlight}> 어떤 친구였나요?</span>
      </Bold18>
      <div className={styles['section']}>
        <Semibold17 className={styles['section-title']}>
          <Icon name='broken_heart' />
          기피하는 친구였어요!
        </Semibold17>
        <div className={styles['section-content']}>
          <NewCheckList data={[
            {
              name: '기피하는 친구 유형 1',
              checked: true,
            },
            {
              name: '기피하는 친구 유형 2',
              checked: true,
            },
            {
              name: '기피하는 친구 유형 3',
              checked: true,
            },
            {
              name: '기피하는 친구 유형 4',
              checked: true,
            }
          ]} />
        </div>
      </div>
      <div className={styles['section']}>
        <div className={styles['section-title']}><Icon name='heart' />적합한 친구였어요!</div>
        <div className={styles['section-content']}>
        <NewCheckList data={[
            {
              name: '기피하는 친구 유형 1',
              checked: true,
            },
            {
              name: '기피하는 친구 유형 2',
              checked: true,
            },
            {
              name: '기피하는 친구 유형 3',
              checked: true,
            },
            {
              name: '기피하는 친구 유형 4',
              checked: true,
            }
          ]} />
        </div>
      </div>
    </div>
  </div >;
}
