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

  const handleNext = useCallback(() => {
    router.replace("/checklist/new");
  }, [router]);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles["content-header"]}>
          <Semibold20 className={styles.title}>
            나를 아프게 하는 가시 뽑기
          </Semibold20>
          <Icon name="logo" />
        </div>
        <div className={styles["signin-bg-wrap"]}>
          <Image
            className={styles["signin-bg"]}
            alt="signin"
            width={258}
            height={200}
            src={images.SIGN_IN_BACKGROUND}
          />
        </div>
      </div>
      <div className={styles["bottom"]}>
        <SubmitButton
          className={styles["kakao-button"]}
          type='kakao'
          name="카카오 로그인"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
