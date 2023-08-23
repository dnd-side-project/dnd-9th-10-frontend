"use client";

import { useRouter } from "next/navigation";
import { useCallback, useReducer, useState } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import {
  Bold18,
  Bold22,
  Medium14,
  Medium16,
  Medium17,
  Semibold17,
  Semibold18,
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import Button from "@dnd9-10/webui/src/button/Button";

import styles from "./page.module.css";
import { initializeClient } from "../../../../../../libs/client";
import TagText from "@dnd9-10/webui/src/text/TagText";
import SearchTextInput from "@dnd9-10/webui/src/input/SearchTextInput";

initializeClient();

interface Props {
  params: {
    friendId?: string;
  };
  searchParams: {};
}

export default function Page(props: Props) {
  const { friendId } = props.params;
  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = [];

  const handleBackOrHome = useCallback(
    (e: React.MouseEvent) => {
      router.replace("/");
    },
    [router]
  );

  const handleSearchText = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  return (
    <div className={styles.wrap}>
      <Topbar
        className={styles.topbar}
        onBackClick={handleBackOrHome}
        RightComponent={
          <SearchTextInput
            className={styles["search-input"]}
            inputProps={{
              placeholder: "가스라이팅",
            }}
            onSearch={handleSearchText}
          />
        }
      />
      <div className={styles["tag-group"]}>
        {tags?.map((item, index) => {
          const { name: tag } = item;
          return (
            <TagText key={index} className={styles.tag} size={"medium"}>
              {tag}
            </TagText>
          );
        })}
      </div>
      <div className={styles.content}>test</div>
    </div>
  );
}
