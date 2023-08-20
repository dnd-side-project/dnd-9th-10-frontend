"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import {
  Bold22,
  Medium14,
  Medium16,
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import BookmarkCardList from "@dnd9-10/webui/src/bookmarks/BookmarkCardList";
import { initializeClient } from "../../libs/client";
import { getBookmarks } from "../../apis/bookmark";
import { useQuery } from "@tanstack/react-query";
import {BookmarkCardProps} from "@dnd9-10/webui/src/bookmarks/BookmarkCard";

initializeClient();

const GET_BOOKMARKS_QUERY_KEY: Array<string> = ["getBookmarks"];

export default function Page() {
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  const { data } = useQuery(GET_BOOKMARKS_QUERY_KEY, () => getBookmarks());

  return (
    <div className={styles.wrap}>
      <Topbar title="북마크" onBackClick={handleBackClick} />
      <BookmarkCardList
        className={styles.content}
        data={(data ?? []).map((bookmark) => {
            const bookmarkCardProp: BookmarkCardProps = {
                id: bookmark.id!,
                description: bookmark.contents!,
                reference: bookmark.reference!,
                active: true,
            };
          return bookmarkCardProp
        })}
      />
    </div>
  );
}

export { GET_BOOKMARKS_QUERY_KEY };
