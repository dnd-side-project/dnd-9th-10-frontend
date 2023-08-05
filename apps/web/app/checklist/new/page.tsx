import { getBasicChecklist } from "../../../apis/checklist";
import ChecklistNewPage from "./_components/page";

export default async function Page() {
  const checklist = await (getBasicChecklist());

  return <ChecklistNewPage data={checklist} />;
}
