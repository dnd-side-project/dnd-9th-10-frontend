import cn from "classnames";
import styles from "./CheckListItem.module.css";
import * as Label from "@radix-ui/react-label";
import React, { useCallback, useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import IconButton from "../button/IconButton";

export interface CheckListItemProps {
  className?: string;
  selected?: boolean;
  name: string;
  onSelected?: (e: React.MouseEvent) => void;
  onChecked?: (e: React.MouseEvent, checked: boolean) => void;
  onChangeText?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
}

export function CheckListItem(props: CheckListItemProps) {
  const {
    className,
    selected,
    name,
    onSelected,
    onChecked,
    onChangeText,
    onDelete,
  } = props;
  const [checked, setChecked] = useState(false);

  const handleToggle = useCallback(
    (e: React.MouseEvent) => {
      setChecked(!checked);
      onChecked?.(e, !checked);
    },
    [checked, onChecked]
  );

  const handleDelete = useCallback(
    (e: React.MouseEvent) => {
      onDelete?.();
    },
    [onDelete]
  );

  return (
    <div
      className={cn(styles.wrap, className, {
        [styles.checked]: checked,
      })}
      onClick={onSelected}
    >
      <Checkbox checked={checked} onClick={handleToggle} />
      <Label.Root className={cn(styles.label)}>
        <input
          className={cn({
            [styles.input]: true,
            [styles["input-focus"]]: selected,
          })}
          defaultValue={name}
          onChange={onChangeText}
        />
      </Label.Root>
      {selected && (
        <IconButton name="remove" size={24} onClick={handleDelete} />
      )}
    </div>
  );
}

export default CheckListItem;
