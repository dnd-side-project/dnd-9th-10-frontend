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
import {
  parseDateFns,
  toDateTimeText,
  transformDateTimeStrToText,
} from "@dnd9-10/shared/src/utils/datetime/datetime";
import { useQuery } from "@tanstack/react-query";
import { deleteDiary, getDiary } from "../../../../../apis/diary";
import {
  DATE_TIME_FORMAT4,
  DATE_TIME_FORMAT6,
} from "@dnd9-10/shared/src/utils/datetime/datetime-format";
import { initializeClient } from "../../../../../libs/client";
import { EmojiTypeByEnum } from "@dnd9-10/shared/src/utils/emoji";
import Loading from "@dnd9-10/webui/src/icon/Loading";

interface Props {
  params: {
    friendId: string;
    diaryId: string;
  };
}

initializeClient();

export default function Page(props: Props) {
  const router = useRouter();
  const { params } = props;
  const friendId = Number(params.friendId);
  const diaryId = Number(params.diaryId);
  const diary = useQuery(["getDiaries", diaryId], () =>
    getDiary({ id: diaryId })
  );
  const { date = "2023-11-11", content, emoji, tags = [] } = diary.data ?? {};

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

  const handleDelete = useCallback(async () => {
    await deleteDiary(diaryId);
    router.back();
  }, [diaryId, router]);

  return (
    <div className={styles.wrap}>
      <Topbar
        className={styles.topbar}
        title={
          <Semibold18 className={styles.title}>
            {toDateTimeText(
              parseDateFns(date, DATE_TIME_FORMAT4),
              DATE_TIME_FORMAT6
            )}
          </Semibold18>
        }
        onBackClick={handleBackClick}
      />
      <div className={styles.content}>
        {diary.isLoading && <Loading className={styles.loading} />}
        {!diary.isLoading && (
          <>
            <Icon
              className={styles.emoji}
              name={EmojiTypeByEnum[emoji] ?? "emoji1"}
            />
            <DiaryContentCard
              content={content}
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
                      <Toolbar.Button>
                        <Icon name="remove" />
                      </Toolbar.Button>
                    }
                    onSubmit={handleDelete}
                  />
                </Toolbar.Root>
              }
            />
            <div className={styles["tag-section"]}>
              <Bold18 className={styles["section-title"]}>태그</Bold18>
              <div className={styles.tags}>
                {tags.map((tag, index) => {
                  return (
                    <TagText
                      key={tag + index}
                      className={styles.tag}
                      size={"medium"}
                    >
                      {tag}
                    </TagText>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
