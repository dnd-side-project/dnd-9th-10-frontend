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
import BookmarkCard from "@dnd9-10/webui/src/bookmarks/BookmarkCard";
import { initializeClient } from "../../../../../../libs/client";

initializeClient();

export default function Page() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <Topbar RightComponent={"닫기"} />
      <div>
        sdfds
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
