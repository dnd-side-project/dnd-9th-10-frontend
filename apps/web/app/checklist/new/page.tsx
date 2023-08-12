import { getChecklist } from "../../../apis/checklist";
import ChecklistNewPage from "./_components/ChecklistNewPage";

export default async function Page() {
  const checklist = await getChecklist();

  return <ChecklistNewPage data={checklist} />;
}
