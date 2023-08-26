"use client";

import { useRouter } from "next/navigation";
import { useCallback, useReducer, useState } from "react";
import { SubmitButton } from "@dnd9-10/webui/src/button/SubmitButton";
import {
  Bold18,
  Bold22,
  Medium14,
  Medium15,
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
import AutocompleteSelectInput, {
  Option,
} from "@dnd9-10/webui/src/input/AutocompleteSelectInput";
import { getTags } from "../../../../../../apis/tag";
import { useQuery } from "@tanstack/react-query";
import { storage } from "../../../../../../libs/local-storage";

initializeClient();

interface Props {
  params: {
    friendId: string;
  };
  searchParams: {};
}

export default function Page(props: Props) {
  const friendId = Number(props.params.friendId);
  const router = useRouter();

  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  const tagsResponse = useQuery(["getTags", friendId], () => getTags(friendId));
  const tags = tagsResponse?.data ?? [];

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  const handleCreateOption = useCallback(
    (text: string) => {
      setSelectedTags([
        ...selectedTags,
        {
          label: text,
          value: text,
        },
      ]);
    },
    [selectedTags]
  );

  const handleSelected = useCallback(
    (text: string) => () => {
      setSelectedTags([
        ...selectedTags,
        {
          label: text,
          value: text,
        },
      ]);
    },
    [selectedTags]
  );

  const handleAddTag = useCallback(() => {
    // storage().setNewDiaryForm(state);
    // router.push(`/friend/${friendId}/diary/new/checklist`);
  }, []);

  const handleSubmit = useCallback(() => {
    storage().setNewDiaryForm(
      JSON.stringify({
        ...storage().getNewDiaryForm(),
        tags: selectedTags.map((item) => item.value),
      })
    );
    router.back();
  }, [router, selectedTags]);

  return (
    <div className={styles.wrap}>
      <Topbar
        className={styles.topbar}
        title="태그 추가"
        onBackClick={handleBackClick}
        RightComponent={
          <Button className={styles["submit-button"]} onClick={handleSubmit}>
            <Medium17 className={styles["submit-button-text"]}>완료</Medium17>
          </Button>
        }
      />
      <div className={styles["input-group"]}>
        <AutocompleteSelectInput
          className={styles["tag-input"]}
          onCreateOption={handleCreateOption}
          value={selectedTags}
        />
        {/* <Button className={styles["add-tag-button"]} onClick={handleAddTag}>
          <Medium15 className={styles["add-tag-button-text"]}>추가</Medium15>
        </Button> */}
      </div>
      <div className={styles["tag-group"]}>
        {tags?.map((item, index) => {
          const { name: tag } = item;
          return (
            <Button key={index} onClick={handleSelected(tag)}>
              <TagText className={styles.tag} size={"medium"}>
                {tag}
              </TagText>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
