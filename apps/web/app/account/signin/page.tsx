"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import { Semibold20 } from "@dnd9-10/webui/src/text/Typographies";
import { useSnackbar } from "notistack";

import styles from "./page.module.css";
import Icon from "@dnd9-10/webui/src/icon/Icon";
import { images } from "@dnd9-10/shared/src/libs/images";
import Image from "next/image";
import { initKakao, loginWithKakao } from "../../../libs/kakao";
import { guestSignup } from "../../../apis/account";
import { storage } from "../../../libs/cookie-storage";
import { setAccessToken } from "../../../libs/axios";
import { ERROR_MESSAGE_BY_CODE } from "../../../libs/error";
import { Toast } from "@dnd9-10/webui/src/toast/Toast";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { enqueueSnackbar } = useSnackbar();
  const errorStatus = searchParams.get("errorStatus");

  useEffect(() => {
    initKakao();

    if (errorStatus) {
      const errorStatusNumber = Number(errorStatus);
      enqueueSnackbar(ERROR_MESSAGE_BY_CODE[errorStatusNumber], {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        preventDuplicate: true,
      });
    }
  }, []);

  const handleGuest = useCallback(async () => {
    try {
      const response = await guestSignup();
      storage().setAccessToken(response.data?.accessToken);
      storage().setMemberId(response.data?.memberId);
      setAccessToken();
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
