import cn from "classnames";
import styles from "./NewCheckListItem.module.css";
import { Medium15 } from "../text/Typographies";
import Checkbox from "../checkbox/Checkbox";

export interface NewCheckListItemProps {
  className?: string;
  name: string;
  checked: boolean;
}

export function NewCheckListItem(props: NewCheckListItemProps) {
  const { className, name, checked } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Medium15 className={styles.name}>{name}</Medium15>
      <Checkbox checked={checked} />
    </div>
  );
}

export default NewCheckListItem;
