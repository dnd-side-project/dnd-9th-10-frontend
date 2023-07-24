import cn from "classnames";
import styles from "./CheckListItem.modules.css";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export interface CheckListItemProps {
  name: string;
}

export function CheckListItem(props: CheckListItemProps) {
  const { name } = props;
  return (
    <form>
      <div className={cn(styles.wrap)}>
        <label className="Label" htmlFor="c1">
          {name}
        </label>
        <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  );
}

export default CheckListItem;
