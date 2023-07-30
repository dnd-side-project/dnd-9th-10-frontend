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

        <Image
          className={styles["signin-bg"]}
          alt="signin"
          width={258}
          height={200}
          src={images.SIGN_IN_BACKGROUND}
        />
      </div>
      <Medium14 className={styles["other-account"]}>
        이미 계정이 있으신가요?
      </Medium14>
      <div className={styles["bottom"]}>
        <SubmitButton
          className={styles["guest-button"]}
          name="시작하기"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
