"use client";

import { initializeClient } from "../../libs/client";
import ChecklistPage from "./_components/ChecklistPage";

initializeClient();

export default async function Page() {
  return <ChecklistPage />;
}
