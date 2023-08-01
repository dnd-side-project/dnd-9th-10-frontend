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
import { SearchTextInput } from "@dnd9-10/webui/src/input/SearchTextInput";
import { NewDiaryEmpty } from "@dnd9-10/webui/src/empty/NewDiaryEmpty";

export default function Page() {
  const router = useRouter();
  const friendId = 1;

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  const handleNewDiary = useCallback(() => {
    router.push("/friends/" + friendId + "/diaries/new");
  }, [router]);

  return (
    <div className={styles.wrap}>
      <Topbar
        className={styles.topbar}
        onBackClick={handleBackClick}
        RightComponent={
          <SearchTextInput
            className={styles["search-input"]}
            inputProps={{ placeholder: "검색할 단어를 입력해주세요." }}
          />
        }
      />
      <div className={styles.content}>
        <NewDiaryEmpty className={styles.empty} />
      </div>
      <div className={styles.bottom}>
        <SubmitButton name="일화 작성" onClick={handleNewDiary} />
      </div>
    </div>
  );
}
