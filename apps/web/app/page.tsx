"use client";

import { useQuery } from "@tanstack/react-query";
import { getBbokCharacters } from "../apis/character";
import MainPage from "./_components/MainPage";
import { Suspense } from "react";
import { initializeClient } from "../libs/client";

initializeClient();

export default function Page() {
  const characters = useQuery(["getBbokCharacters"], getBbokCharacters);

  return (
    <Suspense fallback={null}>
      <MainPage characters={characters?.data ?? []} />
    </Suspense>
  );
}
