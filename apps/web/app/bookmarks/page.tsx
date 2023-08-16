"use client";

import { useRouter } from "next/navigation";
import {useCallback, useEffect, useState} from "react";
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
import {getBookmarks} from "../../apis/bookmark";
import {useQuery} from "@tanstack/react-query";


export default function Page() {
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  const {data} = useQuery(["getBookmarks"], () => getBookmarks())

  return <div className={styles.wrap}>
    <Topbar title="북마크" onBackClick={handleBackClick}/>
    <BookmarkCardList className={styles.content} data={
      (data ?? []).map(bookmark => {
        return {
          description: bookmark.contents,
          reference: bookmark.reference,
          active: true,
        };
      })
    }/>
  </div>;
}
