"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import {
  Bold18,
  Bold22,
  Medium14,
  Medium16,
  Medium17,
  Semibold18,
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import NewDiaryEmojiModal from "@dnd9-10/webui/src/modal/NewDiaryEmojiModal";
import Button from "@dnd9-10/webui/src/button/Button";
import TextInput from "@dnd9-10/webui/src/input/TextInput";
import DateInput from "@dnd9-10/webui/src/input/DateInput";
import Textarea from "@dnd9-10/webui/src/input/Textarea";
import { initializeClient } from "../../../../../libs/client";
import InfoText from "@dnd9-10/webui/src/text/InfoText";
import DiaryEmojiSelectbox from "@dnd9-10/webui/src/selectbox/DiaryEmojiSelectbox";

initializeClient();

export default function Page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currDate, setCurrDate] = useState(new Date());

  const handleEmojiModalClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleEmojiModalSubmit = useCallback(() => {}, []);

  return (
    <div className={styles.wrap}>
      <Topbar
        className={styles.topbar}
        title={<Semibold18 className={styles.title}>일화 작성</Semibold18>}
        RightComponent={
          <Button className={styles["submit-button"]}>
            <Medium17 className={styles["submit-button-text"]}>완료</Medium17>
          </Button>
        }
      />
      <div className={styles.content}>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>친구</Bold18>
          <div className={styles["section-content"]}>
            <TextInput />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>날짜</Bold18>
          <div className={styles["section-content"]}>
            <DateInput currDate={currDate} setCurrDate={setCurrDate} />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>친구와의 일화</Bold18>
          <div className={styles["section-content"]}>
            <Textarea
              textareaProps={{
                rows: 5,
              }}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>
            태그{" "}
            <InfoText className={styles["tag-info"]}>
              최대 7개까지 입력이 가능해요.
            </InfoText>
          </Bold18>
          <div className={styles["section-content"]}>
            <TextInput
              inputProps={{
                disabled: true,
                placeholder: "태그를 추가해보세요 (ex. 거짓말, 가스라이팅 등)",
              }}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>감정</Bold18>
          <div className={styles["section-content"]}>
            <DiaryEmojiSelectbox onSelected={handleEmojiModalSubmit} />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>친구 기준 체크</Bold18>
          <div className={styles["section-content"]}>test</div>
        </div>
      </div>
      {open && (
        <NewDiaryEmojiModal
          className={styles["new-emoji-modal"]}
          onClose={handleEmojiModalClose}
          onSubmit={handleEmojiModalSubmit}
        />
      )}
    </div>
  );
}
