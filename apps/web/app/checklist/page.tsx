import { getFriendChecklist } from "../../apis/checklist";
import { initializeServer } from "../../libs/server";
import ChecklistPage from "./_components/ChecklistPage";

initializeServer();

export default async function Page() {
  const checklist = await getFriendChecklist();

  return <ChecklistPage data={checklist} />;
}
