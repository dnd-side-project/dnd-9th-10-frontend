import cn from "classnames";
import styles from "./NewCheckList.module.css";
import NewCheckListItem, { NewCheckListItemProps } from "./NewCheckListItem";

export interface NewCheckListProps {
  className?: string;
  data: Omit<NewCheckListItemProps, "onChecked">[];
  onChecked: (id: number) => void;
}

export function NewCheckList(props: NewCheckListProps) {
  const { className, data, onChecked } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      {data?.map((item, index) => {
        const { id, name, checked } = item;
        return (
          <NewCheckListItem
            className={styles.item}
            key={index}
            id={id}
            name={name}
            checked={checked}
            onChecked={onChecked}
          />
        );
      })}
    </div>
  );
}

export default NewCheckList;
