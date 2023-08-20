"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Topbar } from "@dnd9-10/webui/src/topbar/Topbar";
import { CheckList } from "@dnd9-10/webui/src/checklist/CheckList";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import { StepIndicator } from "@dnd9-10/webui/src/indicator/StepIndicator";
import {
  Bold22,
  Medium14,
  Medium16,
} from "@dnd9-10/webui/src/text/Typographies";

import styles from "./page.module.css";
import { GetBasicChecklistResponse } from "@dnd9-10/shared/src/__generate__/member/api";
import { createChecklist } from "../../../../apis/checklist";
import { storage } from "../../../../libs/local-storage";

interface Props {
  data: GetBasicChecklistResponse;
}

const BAD_INDEX = 0;
const GOOD_INDEX = 1;

export default function ChecklistNewPage(props: Props) {
  const { data } = props;
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedGoodChecklist, setSelectedGoodChecklist] = useState([]);
  const [goodChecklist, setGoodChecklist] = useState(data?.goodChecklist ?? []);
  const [selectedBadChecklist, setSelectedBadChecklist] = useState([]);
  const [badChecklist, setBadChecklist] = useState(data?.badChecklist ?? []);
  const isBadType = BAD_INDEX === stepIndex;
  const isGoodType = GOOD_INDEX === stepIndex;
  const checklist = isBadType ? badChecklist : goodChecklist;
  const setChecklist = isBadType ? setBadChecklist : setGoodChecklist;
  const selected = isBadType ? selectedBadChecklist : selectedGoodChecklist;
  const setSelected = isBadType
    ? setSelectedBadChecklist
    : setSelectedGoodChecklist;

  useEffect(() => {
    setGoodChecklist(data?.goodChecklist ?? []);
    setBadChecklist(data?.badChecklist ?? []);
  }, [data]);

  const handleBackOrHome = useCallback(
    (e: React.MouseEvent) => {
      if (isGoodType) {
        setStepIndex(BAD_INDEX);
        return;
      }
      router.back();
    },
    [isGoodType, router]
  );

  const handleCheckedByIndex = useCallback(
    (params: { index: number; checked: boolean }) => {
      const { index, checked } = params;
      if (checked) {
        setSelected((prev) => {
          return [...prev, checklist[index]];
        });
        return;
      }
      setSelected((prev) => {
        return prev.filter((name) => name === checklist[index]);
      });
    },
    [checklist, setSelected]
  );

  const handleChangeNameByIndex = useCallback(
    (params: { index: number; name: string }) => {
      const { index, name } = params;
      const newChecklist = [...checklist];
      newChecklist[index] = name;
      setChecklist(newChecklist);
    },
    [checklist, setChecklist]
  );

  const handleDeleteByIndex = useCallback(
    (index: number) => {
      setChecklist(checklist.filter((_, itemIndex) => itemIndex !== index));
    },
    [checklist, setChecklist]
  );

  const handleAddItem = useCallback(() => {
    setChecklist((prev) => {
      return [...prev, ""];
    });
  }, [setChecklist]);

  const handleNext = useCallback(async () => {
    setStepIndex(GOOD_INDEX);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      await createChecklist({
        badChecklist: selectedBadChecklist,
        goodChecklist: selectedGoodChecklist,
      });
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  }, [router, selectedBadChecklist, selectedGoodChecklist]);

  return (
    <div className={styles.wrap}>
      <Topbar
        className={styles.topbar}
        onBackClick={handleBackOrHome}
        RightComponent={<Medium14>2단계 중 {stepIndex + 1}단계</Medium14>}
      />
      <div className={styles.header}>
        <Bold22 className={styles.title} as="p">
          내 기준에서
          <span className={styles.highlight}>
            {" "}
            {isBadType ? "벗어난 친구 유형 " : "적합한 친구 유형 "}
          </span>
          <br />
          5가지를 선택해주세요.
        </Bold22>
        <StepIndicator
          className={styles.indicator}
          current={selected.length}
          totalCount={checklist.length}
        />
      </div>
      <div className={styles.content}>
        <CheckList
          type={isBadType ? "bad" : "good"}
          data={[...(checklist?.map?.((name) => ({ name })) ?? [])]}
          onCheckedByIndex={handleCheckedByIndex}
          onChangeNameByIndex={handleChangeNameByIndex}
          onDeleteByIndex={handleDeleteByIndex}
        />
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
          onClick={isBadType ? handleNext : handleSubmit}
        />
      </div>
    </div>
  );
}
