import cn from "classnames";
import styles from "./CheckList.modules.css";
import CheckListItem, { CheckListItemProps } from "./CheckListItem";

export interface CheckListProps {
  className?: string;
  data: CheckListItemProps[];
}

export function CheckList(props: CheckListProps) {
  const { className, data } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      {data.map((item, index) => {
        const { name } = item;
        return <CheckListItem key={index} name={name} />;
      })}
    </div>
  );
}

export default CheckList;