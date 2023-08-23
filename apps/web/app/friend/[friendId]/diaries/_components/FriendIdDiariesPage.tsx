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
  FriendTag,
  GetDiaryResponse,
} from "@dnd9-10/shared/src/__generate__/member/api";
import TagText from "@dnd9-10/webui/src/text/TagText";
import DiaryCard from "@dnd9-10/webui/src/card/DiaryCard";
import { useQuery } from "@tanstack/react-query";
import { getDiaries } from "../../../../../apis/diary";
import Icon from "@dnd9-10/webui/src/icon/Icon";
import Button from "@dnd9-10/webui/src/button/Button";
import { storage } from "../../../../../libs/local-storage";

interface Props {
  friendId: number;
  tags: FriendTag[];
}

type SortType = "desc" | undefined;

export default function FriendIdDiariesPage(props: Props) {
  const { friendId, tags } = props;
  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState(undefined);
  const [sortType, setSortType] = useState<SortType>("desc");

  const diaries = useQuery(
    ["getDiaries", friendId, searchText, sortType, selectedTag],
    () =>
      getDiaries({
        id: friendId,
        q: searchText,
        order: sortType,
        tag: selectedTag,
      })
  );
  const totalCount = diaries?.data?.totalElements ?? 0;
  const isEmpty = totalCount === 0;

  const handleBackOrHome = useCallback(
    (e: React.MouseEvent) => {
      router.replace("/");
    },
    [router]
  );

  const handleNewDiary = useCallback(() => {
    storage().setNewDiaryForm("");
    router.push(`/friend/${friendId}/diary/new`);
  }, [friendId, router]);

  const handleSearchText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const handleSortType = useCallback(() => {
    setSortType(sortType === "desc" ? undefined : "desc");
  }, [sortType]);

  const handleClickItem = useCallback(
    (item: GetDiaryResponse) => () => {
      router.push(`/friend/${friendId}/diary/${item.id}`);
    },
    [friendId, router]
  );

  const handleSelectedTag = useCallback(
    (tag: string) => () => {
      const hasTag = selectedTag === tag;
      if (hasTag) {
        setSelectedTag(undefined);
        return;
      }
      setSelectedTag(tag);
    },
    [selectedTag]
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
          const { name: tag } = item;
          return (
            <Button key={tag + index} onClick={handleSelectedTag(tag)}>
              <TagText
                className={styles.tag}
                active={selectedTag === tag}
                size={"medium"}
              >
                {tag}
              </TagText>
            </Button>
          );
        })}
      </div>
      <div className={styles["filter-group"]}>
        <Medium13 className={styles["filter-count"]}>
          총 일화 수 {totalCount}
        </Medium13>
        <Button onClick={handleSortType}>
          {sortType === "desc" ? (
            <Medium13 className={styles["filter-sort"]}>
              최신순
              <Icon
                className={styles["sort-icon"]}
                name={"arrow_up"}
                size={14}
              />
            </Medium13>
          ) : (
            <Medium13 className={styles["filter-sort"]}>
              오래된 순
              <Icon
                className={styles["sort-icon"]}
                name={"arrow_down"}
                size={14}
              />
            </Medium13>
          )}
        </Button>
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
