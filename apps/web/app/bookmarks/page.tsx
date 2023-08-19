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
import BookmarkCardList from "@dnd9-10/webui/src/bookmarks/BookmarkCardList";
import { initializeClient } from "../../libs/client";

initializeClient();

export default function Page() {
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  return <div className={styles.wrap}>
    <Topbar title="북마크" onBackClick={handleBackClick}/>
    <BookmarkCardList className={styles.content} data={[
      {
        description: "궁극적으로 결혼이든 우정이든 관계에서 유대감을 형성하는 것은 대화다.",
        reference: "아일랜드 작가, 오스카 와일드",
        active: true,
      },
      {
        description: "모두가 너를 힘들게 할 거야 그게 진실이고. 넌 그럴 가치가 있는 놈 하나만 찾으면 돼.",
        reference: "레게 선구자, 밥 말리",
        active: true,
      },
      {
        description: "고난과 불행이 찾아올 때 비로소 친구가 친구임을 안다.",
        reference: "중국 당나라 시인, 이태백",
        active: true,
      }
    ]}/>
  </div>;
}
