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
import Icon from "@dnd9-10/webui/src/icon/Icon";
import { images } from "@dnd9-10/shared/src/libs/images";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  return <div className={styles.wrap}>result</div>;
}
