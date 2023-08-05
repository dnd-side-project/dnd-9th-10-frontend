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
import NewDiaryEmojiModal from "@dnd9-10/webui/src/modal/NewDiaryEmojiModal";

export default function Page() {
  const router = useRouter();

  const handleEmojiModalClose = useCallback(() => {}, []);

  const handleEmojiModalSubmit = useCallback(() => {}, []);

  return (
    <div className={styles.wrap}>
      <Topbar />
      <NewDiaryEmojiModal
        className={styles["new-emoji-modal"]}
        onClose={handleEmojiModalClose}
        onSubmit={handleEmojiModalSubmit}
      />
    </div>
  );
}
