import cn from "classnames";
import styles from "./CheckList.modules.css";
import { CheckListItemProps } from "./CheckListItem";

export interface CheckListProps {
  className?: string;
  data: CheckListItemProps[];
}

export function CheckList(props: CheckListProps) {
  const { className, data } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      {data.map((item, index) => {
        return <div key={index}>test</div>;
      })}
    </div>
  );
}

export default CheckList;
