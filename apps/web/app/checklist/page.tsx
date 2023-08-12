import { getChecklist } from "../../apis/checklist";
import ChecklistPage from "./_components/ChecklistPage";

export default async function Page() {
  const checklist = await getChecklist();

  return (
    <ChecklistPage data={checklist} />
  );
}
