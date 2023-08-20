"use client";

import { useQuery } from "@tanstack/react-query";
import { getBasicChecklist } from "../../../apis/checklist";
import ChecklistNewPage from "./_components/ChecklistNewPage";

export default function Page() {
  const checklist = useQuery(["getBasicChecklist"], getBasicChecklist);

  return <ChecklistNewPage data={checklist?.data ?? {}} />;
}
