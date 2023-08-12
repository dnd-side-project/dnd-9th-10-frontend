"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import {
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";

import styles from "./page.module.css";
import Icon from "@dnd9-10/webui/src/icon/Icon";
import { images } from "@dnd9-10/shared/src/libs/images";
import Image from "next/image";
import { initKakao, loginWithKakao } from "../../../libs/kakao";
import { guestLogin } from "../../../apis/account";
import { storage } from "../../../libs/local-storage";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    initKakao();
  }, []);

  const handleGuest = useCallback(async () => {
    try {
      const response = await guestLogin();
      storage().setMemberId(response.data?.memberId);
      router.replace("/checklist/new");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }, [router]);

  const handleKakao = useCallback(() => {
    loginWithKakao();
  }, []);

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
          type="kakao"
          name="카카오 로그인"
          onClick={handleKakao}
        />
        <SubmitButton
          className={styles["guest-button"]}
          name="시작하기"
          onClick={handleGuest}
        />
      </div>
    </div>
  );
}
