"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import {
  Bold22,
  Medium13,
  Medium14,
  Medium16,
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import { SearchTextInput } from "@dnd9-10/webui/src/input/SearchTextInput";
import { NewDiaryEmpty } from "@dnd9-10/webui/src/empty/NewDiaryEmpty";
import {

  DiaryTagDto, GetDiariesResponse, GetDiaryResponse,
} from "@dnd9-10/shared/src/__generate__/member/api";
import TagText from "@dnd9-10/webui/src/text/TagText";
import DiaryCard from "@dnd9-10/webui/src/card/DiaryCard";
import { useQuery } from "@tanstack/react-query";
import { getDiaries } from "../../../../../apis/diary";
import Icon from "@dnd9-10/webui/src/icon/Icon";

interface Props {
  friendId: number;
  tags: DiaryTagDto['tags'];
}

export default function FriendIdDiariesPage(props: Props) {
  const { friendId, tags } = props;
  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const diaries = useQuery(["getDiaries", friendId, searchText], () =>
    getDiaries({ id: friendId, q: searchText })
  );
  const isEmpty = diaries?.data?.totalElements === 0;

  const handleBackOrHome = useCallback(
    (e: React.MouseEvent) => {
      router.replace("/");
    },
    [router]
  );

  const handleNewDiary = useCallback(() => {
    router.push(`/friend/${friendId}/diary/new`);
  }, [friendId, router]);

  const handleSearchText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const handleClickItem = useCallback(
    (item: GetDiaryResponse) => () => {
      router.push(`/friend/${friendId}/diary/${item.id}`);
    },
    [friendId, router]
  );

  return (
    <div className={styles.wrap}>
      <Topbar
        className={styles.topbar}
        onBackClick={handleBackOrHome}
        RightComponent={
          <SearchTextInput
            className={styles["search-input"]}
            inputProps={{
              placeholder: "검색할 단어를 입력해주세요.",
            }}
            onSearch={handleSearchText}
          />
        }
      />
      <div className={styles["tag-group"]}>
        {tags?.map((item, index) => {
          const { tag } = item;
          return (
            <TagText key={index} className={styles.tag} size={"medium"}>
              {tag}
            </TagText>
          );
        })}
      </div>
      <div className={styles["filter-group"]}>
        <Medium13 className={styles["filter-count"]}>총 일화 수 10</Medium13>
        <Medium13 className={styles["filter-sort"]}>
          최신순
          <Icon className={styles["sort-icon"]} name={"forward"} size={14} />
        </Medium13>
      </div>
      <div className={styles.content}>
        {isEmpty ? <NewDiaryEmpty className={styles.empty} /> : null}
        {!isEmpty
          ? diaries?.data?.diaries?.map?.((item) => {
              const { id, date, tags, content, emojiUrl } = item;
              return (
                <DiaryCard
                  className={styles.item}
                  key={id}
                  date={date}
                  description={content}
                  tags={tags}
                  emojiUrl={emojiUrl}
                  onClick={handleClickItem(item)}
                />
              );
            })
          : null}
      </div>
      <div className={styles.bottom}>
        <SubmitButton name="일화 작성" onClick={handleNewDiary} />
      </div>
    </div>
  );
}
