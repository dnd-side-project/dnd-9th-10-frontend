"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import BookmarkCard from "@dnd9-10/webui/src/bookmarks/BookmarkCard";
import NewDiaryAnalysisCard from "@dnd9-10/webui/src/card/NewDiaryAnalysisCard";
import { initializeClient } from "../../../../../../libs/client";
import Button from "@dnd9-10/webui/src/button/Button";
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

initializeClient();

interface Props {
  params: {
    friendId?: string;
  };
  searchParams: {};
}

export default function Page(props: Props) {
  const friendId = Number(props.params.friendId);
  const router = useRouter();

  const handleClose = useCallback(() => {
    router.replace(`/friend/${friendId}/diaries`);
  }, [friendId, router]);

  return (
    <div className={styles.wrap}>
      <Topbar
        title={""}
        RightComponent={
          <Button className={styles["submit-button"]} onClick={handleClose}>
            <Medium17 className={styles["submit-button-text"]}>닫기</Medium17>
          </Button>
        }
      />
      <div className={styles.content}>
        <NewDiaryAnalysisCard className={styles["new-diary-item"]} />
        <BookmarkCard
          active={false}
          description={`궁극적으로 결혼이든 우정이든 관계에서 
         유대감을 형성하는 것은 대화다. `}
          reference="아일랜드 작가, 오스카 와일드"
        />
      </div>
    </div>
  );
}
