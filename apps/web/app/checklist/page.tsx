import { getFriendChecklist } from "../../apis/checklist";
import ChecklistPage from "./_components/ChecklistPage";

export default async function Page() {
  const checklist = await getFriendChecklist();

  return (
    <ChecklistPage data={checklist} />
  );
}
