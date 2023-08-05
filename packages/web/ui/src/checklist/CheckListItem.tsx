import cn from "classnames";
import styles from "./CheckListItem.module.css";
import * as Label from "@radix-ui/react-label";
import { useCallback, useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";

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
    <div
      className={cn(styles.wrap, className, {
        [styles.checked]: checked,
      })}
      onClick={handleToggle}
    >
      <Checkbox checked={checked} />
      <Label.Root className={cn(styles.label)}>{name}</Label.Root>
    </div>
  );
}

export default CheckListItem;
