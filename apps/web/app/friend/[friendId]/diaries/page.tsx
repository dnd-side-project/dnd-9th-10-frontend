"use client";

import { useQuery } from "@tanstack/react-query";
import { getDiaries } from "../../../../apis/diary";
import { getTags } from "../../../../apis/tag";
import { initializeClient } from "../../../../libs/client";
import FriendIdDiariesPage from "./_components/FriendIdDiariesPage";

interface Props {
  params: {
    friendId?: string;
  };
  searchParams: {};
}

initializeClient();

export default function Page(props: Props) {
  const { params } = props;
  const friendId = Number(params.friendId);
  const tags = useQuery(["getTags", friendId], () => getTags(friendId));

  return <FriendIdDiariesPage friendId={friendId} tags={tags?.data ?? []} />;
}
