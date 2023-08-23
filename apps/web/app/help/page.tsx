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
import { initializeClient } from "../../libs/client";
import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";

initializeClient();

export default function Page() {
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className={styles.wrap}>
      <Topbar title="서비스 문의" onBackClick={handleBackClick} />
      <div className={styles["content"]}>
        <Image
          alt={"service"}
          width={236}
          height={197}
          src={images.SERVICE_EMAIL}
        />
        <Medium16 className={styles["description"]}>
          서비스 문의는 아래 이메일로 보내주세요
        </Medium16>
        <Medium16 className={styles["email"]}>
          <a href="mailto:bbok@gmail.com">bbok@gmail.com</a>
        </Medium16>
      </div>
    </div>
  );
}
