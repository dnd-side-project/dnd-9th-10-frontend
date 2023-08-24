"use client";

import { useRouter } from "next/navigation";
import { useCallback, useReducer } from "react";
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
import Icon from "@dnd9-10/webui/src/icon/Icon";
import NewCheckList from "@dnd9-10/webui/src/checklist/NewCheckList";
import Topbar from "@dnd9-10/webui/src/topbar/Topbar";
import Button from "@dnd9-10/webui/src/button/Button";
import { useSnackbar } from "notistack";

import styles from "./page.module.css";
import { initializeClient } from "../../../../../../libs/client";
import { storage } from "../../../../../../libs/local-storage";
import { createDiary } from "../../../../../../apis/diary";
import { CreateDiaryRequestEmojiEnum } from "@dnd9-10/shared/src/__generate__/member/api";
import { useQuery } from "@tanstack/react-query";
import { getFriendChecklist } from "../../../../../../apis/checklist";
import { EmojiEnumByType, EmojiType } from "@dnd9-10/shared/src/utils/emoji";
import { toDateTimeText } from "@dnd9-10/shared/src/utils/datetime/datetime";
import { DATE_TIME_FORMAT4 } from "@dnd9-10/shared/src/utils/datetime/datetime-format";

initializeClient();

interface Props {
  params: {
    friendId?: string;
  };
  searchParams: {};
}

type FormProps = {
  goodChecklist: Set<number>;
  badChecklist: Set<number>;
};

const initialState: FormProps = {
  goodChecklist: new Set(),
  badChecklist: new Set(),
};

export default function Page(props: Props) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const friendId = Number(props.params.friendId);
  const friendChecklistResponse = useQuery(
    ["getFriendChecklist"],
    getFriendChecklist,
    {
      suspense: false,
    }
  );
  const friendChecklist = friendChecklistResponse.data ?? {
    goodChecklist: [],
    badChecklist: [],
  };

  const [state, setState] = useReducer(
    (current: FormProps, update: Partial<FormProps>) => ({
      ...current,
      ...update,
    }),
    initialState
  );

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  const handleBadChecklistChecked = useCallback(
    (id: number) => {
      if (state.badChecklist.has(id)) {
        state.badChecklist.delete(id);
        setState({
          badChecklist: state.badChecklist,
        });
      }
      setState({
        badChecklist: state.badChecklist.add(id),
      });
    },
    [state.badChecklist]
  );

  const handleGoodChecklistChecked = useCallback(
    (id: number) => {
      if (state.goodChecklist.has(id)) {
        state.goodChecklist.delete(id);
        setState({
          goodChecklist: state.goodChecklist,
        });
      }
      setState({
        goodChecklist: state.goodChecklist.add(id),
      });
    },
    [state.goodChecklist]
  );

  const handleSubmit = useCallback(async () => {
    const newForm: {
      content: string;
      date: Date;
      tags: string[];
      emoji: EmojiType | null;
      useFriends: boolean;
    } = storage().getNewDiaryForm();
    const badChecklistValues = Array.from(state.badChecklist.values());
    const goodChecklistValues = Array.from(state.goodChecklist.values());

    try {
      const response = await createDiary({
        friendId,
        diaryRequestDto: {
          content: newForm.content,
          date: toDateTimeText(newForm.date, DATE_TIME_FORMAT4),
          tags: newForm.tags,
          emoji: EmojiEnumByType[newForm.emoji],
          checklist: [
            ...badChecklistValues.map((id) => {
              return {
                id,
                isChecked: true,
                isGood: false,
              };
            }),
            ...goodChecklistValues.map((id) => {
              return {
                id,
                isChecked: true,
                isGood: true,
              };
            }),
          ],
        },
      });
      storage().setSayingResult(JSON.stringify(response?.saying ?? {}));
      router.replace(`/friend/${friendId}/diary/new/result`);
    } catch (e) {
      console.error(e);
      enqueueSnackbar(e.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        preventDuplicate: true,
      });
    }
  }, [
    enqueueSnackbar,
    friendId,
    router,
    state.badChecklist,
    state.goodChecklist,
  ]);

  return (
    <div className={styles.wrap}>
      <Topbar
        title={<Semibold18 className={styles.title}>친구 기준</Semibold18>}
        RightComponent={
          <Button className={styles["submit-button"]} onClick={handleSubmit}>
            <Medium17 className={styles["submit-button-text"]}>완료</Medium17>
          </Button>
        }
        onBackClick={handleBackClick}
      />
      <div className={styles.content}>
        <Bold18 className={styles.description}>
          이 일화에서 친구는
          <span className={styles.highlight}> 어떤 친구였나요?</span>
        </Bold18>
        <div className={styles["section"]}>
          <Semibold17 className={styles["section-title"]}>
            <Icon name="broken_heart" />
            기피하는 친구였어요!
          </Semibold17>
          <div className={styles["section-content"]}>
            <NewCheckList
              data={friendChecklist.badChecklist?.map?.((item) => {
                return {
                  id: item.id,
                  name: item.criteria ?? "",
                  checked: false,
                };
              })}
              onChecked={handleBadChecklistChecked}
            />
          </div>
        </div>
        <div className={styles["section"]}>
          <div className={styles["section-title"]}>
            <Icon name="heart" />
            적합한 친구였어요!
          </div>
          <div className={styles["section-content"]}>
            <NewCheckList
              data={friendChecklist.goodChecklist?.map?.((item) => {
                return {
                  id: item.id,
                  name: item.criteria ?? "",
                  checked: false,
                };
              })}
              onChecked={handleGoodChecklistChecked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
