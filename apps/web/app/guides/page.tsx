"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import { GuideCarousel } from "@dnd9-10/webui/src/carousel/GuideCarousel";
import { storage } from "../../libs/cookie-storage";

import styles from "./page.module.css";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    storage().setIsShowGuide("true");
  }, []);

  const handleNext = useCallback(() => {
    router.replace("/account/signin");
  }, [router]);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <GuideCarousel itemClassName={styles.item} />
      </div>
      <div className={styles.bottom}>
        <SubmitButton name="시작하기" onClick={handleNext} />
      </div>
    </div>
  );
}
