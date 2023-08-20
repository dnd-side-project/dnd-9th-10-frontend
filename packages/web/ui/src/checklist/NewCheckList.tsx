import cn from "classnames";
import styles from "./NewCheckList.module.css";
import NewCheckListItem, { NewCheckListItemProps } from "./NewCheckListItem";

export interface NewCheckListProps {
  className?: string;
  data: NewCheckListItemProps[];
}

export function NewCheckList(props: NewCheckListProps) {
  const { className, data } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      {data?.map((item, index) => {
        const { name, checked } = item;
        return (
          <NewCheckListItem
            className={styles.item}
            key={index}
            name={name}
            checked={checked}
          />
        );
      })}
    </div>
  );
}

export default NewCheckList;
