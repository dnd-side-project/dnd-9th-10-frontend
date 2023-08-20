"use client";

import { useCallback } from "react";
import {
  BottomNavigation,
  BottomTabs,
} from "@dnd9-10/webui/src/navigation/BottomNavigation";
import styles from "./page.module.css";
import { Bold22, Medium15 } from "@dnd9-10/webui/src/text/Typographies";
import { Button } from "@dnd9-10/webui/src/button/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { ProfileCard } from "@dnd9-10/webui/src/card/ProfileCard";
import { initializeClient } from "../../libs/client";
import { useQuery } from "@tanstack/react-query";
import { getMember } from "../../apis/account";
import { GetMemberInfoResponseOauth2ProviderEnum } from "@dnd9-10/shared/src/__generate__/member/api";

initializeClient();

export default function Page() {
  const member = useQuery(["getMember"], getMember);
  const {
    memberName = "",
    profileUrl = "",
    oauth2Provider = GetMemberInfoResponseOauth2ProviderEnum.Guest,
  } = member.data ?? {};
  const router = useRouter();
  const searchParam = useSearchParams();

  const handleAdd = useCallback(() => {
    router.push(`/friend/${1}/diary/new`);
  }, [router]);

  const handleSelected = useCallback(
    (tab: BottomTabs) => {
      if (tab === "home") {
        router.replace("/");
        return;
      }
      router.replace("/my");
    },
    [router]
  );

  const handleBookmark = useCallback(() => {
    router.push("/bookmarks");
  }, [router]);

  const handleSignIn = useCallback(() => {
    router.push("/account/signin");
  }, [router]);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.section}>
          <Bold22 className={styles["section-title"]}>내 정보</Bold22>
          <div className={styles["section-content"]}>
            <ProfileCard
              name={memberName}
              profileUrl={profileUrl}
              oauth2Provider={oauth2Provider}
            />
          </div>
        </div>
        <ul className={styles.list}>
          <li>
            <Button onClick={handleBookmark}>
              <Medium15>글귀/명언 북마크</Medium15>
            </Button>
          </li>
          <li>
            <Button onClick={handleSignIn}>
              <Medium15>회원가입/로그인</Medium15>
            </Button>
          </li>
          <li>
            <Button>
              <Medium15>서비스 문의</Medium15>
            </Button>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <BottomNavigation
          active={"my"}
          onAdd={handleAdd}
          onSelected={handleSelected}
        />
      </div>
    </div>
  );
}
