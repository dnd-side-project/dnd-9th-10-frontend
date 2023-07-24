import cn from "classnames";
import styles from "./CheckListItem.modules.css";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";

export interface CheckListItemProps {
  name: string;
}

export function CheckListItem(props: CheckListItemProps) {
  const { name } = props;
  return (
    <form className={cn(styles.wrap)}>
      <Label.Root className="LabelRoot" htmlFor="firstName">
        {name}
      </Label.Root>
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </form>
  );
}

export default CheckListItem;
