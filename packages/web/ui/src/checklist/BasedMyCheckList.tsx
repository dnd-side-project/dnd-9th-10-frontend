import cn from "classnames";
import Icon from "../icon/Icon";
import { Regular16, Semibold18 } from "../text/Typographies";
import styles from "./BasedMyCheckList.module.css";

type BasedMyCheckListType = "good" | "bad";
export interface BasedMyCheckListProps {
  className?: string;
  type: BasedMyCheckListType;
  data: string[];
}

export function BasedMyCheckList(props: BasedMyCheckListProps) {
  const { className, type = "bad", data } = props;
  const byType: Record<
    BasedMyCheckListType,
    {
      title: string;
      icon: "heart" | "broken_heart";
    }
  > = {
    bad: {
      title: "기피하는 친구 유형",
      icon: "broken_heart",
    },
    good: {
      title: "적합한 친구 유형",
      icon: "heart",
    },
  };

  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles.header}>
        <Icon className={styles.icon} name={byType[type].icon} />
        <Semibold18 className={styles.title}>{byType[type].title}</Semibold18>
      </div>
      <ul className={cn(styles.content, styles.list)}>
        {data?.map((item, index) => {
          return (
            <Regular16 key={index} as="li" className={styles.item}>
              {item}
            </Regular16>
          );
        })}
      </ul>
    </div>
  );
}

export default BasedMyCheckList;
