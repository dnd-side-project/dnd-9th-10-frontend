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

export default function Page() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <Topbar title="내가 선택한 기준" />
      <div>test</div>
    </div>
  );
}
