import cn from "classnames";
import styles from "./NewCheckListItem.module.css";
import { Medium15 } from "../text/Typographies";
import Checkbox from "../checkbox/Checkbox";
import { useCallback } from "react";

export interface NewCheckListItemProps {
  className?: string;
  id: number;
  name: string;
  checked: boolean;
  onChecked: (id: number) => void;
}

export function NewCheckListItem(props: NewCheckListItemProps) {
  const { className, id, name, checked, onChecked } = props;

  const handleChecked = useCallback(() => {
    onChecked(id);
  }, [id, onChecked]);

  return (
    <div className={cn(styles.wrap, className)}>
      <Medium15 className={styles.name}>{name}</Medium15>
      <Checkbox checked={checked} onClick={handleChecked} />
    </div>
  );
}

export default NewCheckListItem;
