"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { TagText } from "@dnd9-10/webui/src/text/TagText";
import {
  Bold18,
  Bold22,
  Medium14,
  Medium16,
  Semibold18,
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";
import * as Toolbar from "@radix-ui/react-toolbar";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import Icon from "@dnd9-10/webui/src/icon/Icon";

import { DiaryContentCard } from "@dnd9-10/webui/src/card/DiaryContentCard";
import { DeleteThingsModal } from "@dnd9-10/webui/src/modal/DeleteThingsModal";

export default function Page() {
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  const handleSticker = useCallback(() => {
    //
  }, [router]);

  const handleEdit = useCallback(() => {
    //
  }, [router]);

  const handleChecked = useCallback(() => {
    //
  }, [router]);

  const handleDelete = useCallback(() => {
    //
  }, [router]);

  return (
    <div className={styles.wrap}>
      <Topbar
        className={styles.topbar}
        title={<Semibold18 className={styles.title}>{"23.07.18"}</Semibold18>}
        onBackClick={handleBackClick}
      />
      <div className={styles.content}>
        <Icon className={styles.emoji} name="emoji1" />
        <DiaryContentCard
          content="testtes"
          TooltipComponent={
            <Toolbar.Root className={styles.toolbar}>
              <Toolbar.Button onClick={handleSticker}>
                <Icon name="sticker" />
              </Toolbar.Button>
              <Toolbar.Button onClick={handleEdit}>
                <Icon name="modify" />
              </Toolbar.Button>
              <Toolbar.Button onClick={handleChecked}>
                <Icon name="checked" />
              </Toolbar.Button>
              <DeleteThingsModal
                description={`삭제한 일화는 다시 복구할 수 없어요.`}
                TriggerComponent={
                  <Toolbar.Button onClick={handleDelete}>
                    <Icon name="remove" />
                  </Toolbar.Button>
                }
              />
            </Toolbar.Root>
          }
        />
        <div className={styles["tag-section"]}>
          <Bold18 className={styles["section-title"]}>태그</Bold18>
          <div className={styles.tags}>
            <TagText className={styles.tag} size={"medium"}>
              test
            </TagText>
          </div>
        </div>
      </div>
    </div>
  );
}
