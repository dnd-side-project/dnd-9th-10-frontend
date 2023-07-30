"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import { GuideCarousel } from "@dnd9-10/webui/src/carousel/GuideCarousel";

import styles from "./page.module.css";

export default function Page() {
  const router = useRouter();

  const handleNext = useCallback(() => {
    router.replace("/account/signin");
  }, [router]);

  return (
    <div className={styles.wrap}>
      <GuideCarousel />
      <SubmitButton name="시작하기" onSubmit={handleNext} />
    </div>
  );
}
