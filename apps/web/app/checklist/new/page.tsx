import { getBasicChecklist } from "../../../apis/checklist";
import ChecklistNewPage from "./_components/ChecklistNewPage";

export default async function Page() {
  const checklist = await getBasicChecklist();

  return <ChecklistNewPage data={checklist} />;
}
