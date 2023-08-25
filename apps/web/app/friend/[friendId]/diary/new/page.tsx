"use client";

import { useRouter } from "next/navigation";
import { useCallback, useReducer, useState } from "react";
import {
  Bold18,
  Bold22,
  Medium14,
  Medium16,
  Medium17,
  Semibold18,
  Semibold20,
} from "@dnd9-10/webui/src/text/Typographies";

import styles from "./page.module.css";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import NewDiaryEmojiModal from "@dnd9-10/webui/src/modal/NewDiaryEmojiModal";
import Button from "@dnd9-10/webui/src/button/Button";
import Switch from "@dnd9-10/webui/src/input/Switch";
import TextInput from "@dnd9-10/webui/src/input/TextInput";
import DateInput from "@dnd9-10/webui/src/input/DateInput";
import Textarea from "@dnd9-10/webui/src/input/Textarea";
import { initializeClient } from "../../../../../libs/client";
import InfoText from "@dnd9-10/webui/src/text/InfoText";
import DiaryEmojiSelectbox from "@dnd9-10/webui/src/selectbox/DiaryEmojiSelectbox";
import { useQuery } from "@tanstack/react-query";
import { getFriend } from "../../../../../apis/friend";
import { storage } from "../../../../../libs/local-storage";
import { EmojiType } from "@dnd9-10/shared/src/utils/emoji";
import TagText from "@dnd9-10/webui/src/text/TagText";

initializeClient();

interface Props {
  params: {
    friendId: string;
  };
  searchParams: {};
}

type FormProps = {
  content: string;
  date: Date;
  tags: string[];
  emoji: EmojiType | null;
  useFriends: boolean;
  open: boolean;
};

const initialState: FormProps = {
  content: "",
  date: new Date(),
  tags: [],
  emoji: null,
  useFriends: false,
  open: true,
};

export default function Page(props: Props) {
  const router = useRouter();
  const friendId = props.params.friendId;
  const friendResponse = useQuery(
    ["getFriend"],
    () => getFriend(Number(friendId)),
    {
      suspense: false,
    }
  );

  const [state, setState] = useReducer(
    (current: FormProps, update: Partial<FormProps>) => ({
      ...current,
      ...update,
    }),
    { ...initialState, ...storage().getNewDiaryForm() }
  );

  const handleDate = useCallback((date) => {
    setState({
      date,
    });
  }, []);

  const handleContent: React.ChangeEventHandler<HTMLTextAreaElement> =
    useCallback((e) => {
      const content = e.target.value;
      setState({
        content,
      });
    }, []);

  const handleTag = useCallback(() => {
    storage().setNewDiaryForm(JSON.stringify(state));
    router.push(`/friend/${friendId}/diary/new/tag`);
  }, [friendId, router, state]);

  const handleEmojiModalClose = useCallback(() => {
    setState({
      open: false,
    });
  }, []);

  const handleEmoji = useCallback((emoji: EmojiType) => {
    setState({
      emoji,
      open: false,
    });
  }, []);

  const handleSubmit = useCallback(() => {
    storage().setNewDiaryForm(JSON.stringify(state));
    router.push(`/friend/${friendId}/diary/new/checklist`);
  }, [friendId, router, state]);

  return (
    <div
      className={styles.wrap}
      style={{ overflow: state.open ? "hidden" : "auto" }}
    >
      <Topbar
        className={styles.topbar}
        title={<Semibold18 className={styles.title}>일화 작성</Semibold18>}
        RightComponent={
          <Button className={styles["submit-button"]} onClick={handleSubmit}>
            <Medium17 className={styles["submit-button-text"]}>완료</Medium17>
          </Button>
        }
      />
      <div className={styles.content}>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>친구</Bold18>
          <div className={styles["section-content"]}>
            <TextInput
              inputProps={{
                value: friendResponse.data?.name ?? "",
                disabled: true,
              }}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>날짜</Bold18>
          <div className={styles["section-content"]}>
            <DateInput currDate={state.date} setCurrDate={handleDate} />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>친구와의 일화</Bold18>
          <div className={styles["section-content"]}>
            <Textarea
              textareaProps={{
                rows: 5,
                value: state.content,
                onChange: handleContent,
              }}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>
            태그{" "}
            <InfoText className={styles["tag-info"]}>
              최대 7개까지 입력이 가능해요.
            </InfoText>
          </Bold18>
          <div className={styles["tag-section-content"]} onClick={handleTag}>
            {state.tags.length === 0 ? (
              <TextInput
                inputProps={{
                  // disabled: true,
                  placeholder:
                    "태그를 추가해보세요 (ex. 거짓말, 가스라이팅 등)",
                }}
                onClick={handleTag}
              />
            ) : (
              <div className={styles.tags}>
                {state.tags.map((tag, index) => {
                  return (
                    <TagText key={index} className={styles.tag} size={"medium"}>
                      {tag}
                    </TagText>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>감정</Bold18>
          <div className={styles["section-content"]}>
            <DiaryEmojiSelectbox
              defaultSelected={state.emoji}
              onSelected={handleEmoji}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Bold18 className={styles["section-title"]}>친구 기준 체크</Bold18>
          <div className={styles["section-content"]}>
            <Switch />
          </div>
        </div>
      </div>
      {state.open && (
        <NewDiaryEmojiModal
          className={styles["new-emoji-modal"]}
          onClose={handleEmojiModalClose}
          onSubmit={handleEmoji}
        />
      )}
    </div>
  );
}
