import cn from "classnames";
import styles from "./CheckListItem.module.css";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import { useCallback, useState } from "react";

export interface CheckListItemProps {
  className?: string;
  name: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function CheckListItem(props: CheckListItemProps) {
  const { className, name, onClick } = props;
  const [checked, setChecked] = useState(false);

  const handleToggle = useCallback(
    (e: React.MouseEvent) => {
      setChecked(!checked);
      onClick?.(e);
    },
    [checked, onClick]
  );

  return (
    <div className={cn(styles.wrap, className)} onClick={handleToggle}>
      <Label.Root className={cn(styles.label)}>{name}</Label.Root>
      <Checkbox.Root checked={checked}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
}

export default CheckListItem;
