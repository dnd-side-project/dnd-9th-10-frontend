"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomTabs,
} from "@dnd9-10/webui/src/navigation/BottomNavigation";
import { FriendEmpty } from "@dnd9-10/webui/src/empty/FriendEmpty";
import styles from "./page.module.css";
import usePwa from "../../hooks/usePwa";
import { Bold22 } from "@dnd9-10/webui/src/text/Typographies";
import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";
import { Button } from "@dnd9-10/webui/src/button/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { Carousel } from "@dnd9-10/webui/src/carousel/Carousel";
import { FriendCard } from "@dnd9-10/webui/src/card/FriendCard";
import { NewFriendCard } from "@dnd9-10/webui/src/card/NewFriendCard";
import CircularIndicator from "@dnd9-10/webui/src/indicator/CircularIndicator";
import { FriendDto } from "@dnd9-10/shared/src/__generate__/member/api";
import { BbokCharacterDto } from "@dnd9-10/shared/src/__generate__/member/api";
import { createFriend } from "../../apis/friend";
import {
  durationDaysByTime,
  parseDate,
  todayTime,
} from "@dnd9-10/shared/src/utils/datetime/datetime";
import { getFriends } from "../../apis/friend";
import { useQuery } from "@tanstack/react-query";

interface Props {
  characters: BbokCharacterDto[];
}

export default function MainPage(props: Props) {
  const { characters } = props;
  const friendsResponse = useQuery(["getFriends"], getFriends, {
    suspense: true,
  });
  const friends = friendsResponse?.data ?? [];
  const router = useRouter();
  const searchParam = useSearchParams();
  const [page, setPage] = useState(0);
  const totalCount = friends.length + 2;

  usePwa();

  const handlePagination = useCallback((page: number) => {
    setPage(page);
  }, []);

  const handleSelectedItem = useCallback(
    (friend: FriendDto) => () => {
      router.push(`/friend/${friend.id}/diaries`);
    },
    [router]
  );

  const handleAddFriend = useCallback(
    async (form: { name: string; character: BbokCharacterDto }) => {
      await createFriend({
        character: form.character.type,
        name: form.name,
      });
      friendsResponse.refetch()
    },
    [friendsResponse]
  );

  const handleAdd = useCallback(() => {
    router.push(`/friend/${page}/diary/new`);
  }, [page, router]);

  const handleSelectedTab = useCallback(
    (tab: BottomTabs) => {
      if (tab === "home") {
        router.replace("/");
        return;
      }
      router.replace("/my");
    },
    [router]
  );

  const handleBasedFriend = useCallback(() => {
    router.push("/checklist");
  }, [router]);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.section}>
          <Bold22 className={styles["section-title"]}>친구 선택</Bold22>
          <div className={styles["section-content"]}>
            <Carousel onPagination={handlePagination}>
              {friends.map((item, index) => {
                const {
                  characterUrl,
                  startedAt,
                  countingDiary,
                  id,
                  name,
                  score,
                  active,
                } = item;
                return (
                  <div key={id + index} className={styles["friend-item"]}>
                    <FriendCard
                      characterUrl={characterUrl}
                      statusText={
                        durationDaysByTime(
                          startedAt ? parseDate(startedAt).valueOf() : todayTime(),
                          todayTime()
                        ) + "일째 작성 중"
                      }
                      name={name}
                      diaryCount={countingDiary}
                      score={score}
                      onClick={handleSelectedItem(item)}
                    />
                  </div>
                );
              })}
              <div className={styles["friend-item"]}>
                <FriendEmpty
                  characters={characters}
                  onAddFriend={handleAddFriend}
                />
              </div>
              <div className={styles["friend-item"]}>
                <NewFriendCard />
              </div>
            </Carousel>
            <CircularIndicator
              className={styles["friend-indicator"]}
              current={page}
              totalCount={totalCount}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Bold22 className={styles["section-title"]}>나의 친구 기준</Bold22>
          <div className={styles["section-content"]}>
            <Button
              className={styles["based-friend-button"]}
              onClick={handleBasedFriend}
            >
              <Image
                alt="based friend"
                fill={true}
                src={images.BASED_FRIEND}
                objectFit={"contain"}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <BottomNavigation
          active="home"
          onAdd={handleAdd}
          onSelected={handleSelectedTab}
        />
      </div>
    </div>
  );
}
