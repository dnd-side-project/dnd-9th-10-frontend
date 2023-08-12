'use client'

import { useQuery } from "@tanstack/react-query";
import { getBbokCharacters } from "../apis/character";
import { getFriends } from "../apis/friend";
import MainPage from "./_components/MainPage";

export default function Page() {
  const friends = useQuery(['getFriends'], getFriends)
  const characters = useQuery(['getBbokCharacters'], getBbokCharacters)

  return <MainPage friends={friends?.data ?? []} characters={characters?.data ?? []} />;
}
