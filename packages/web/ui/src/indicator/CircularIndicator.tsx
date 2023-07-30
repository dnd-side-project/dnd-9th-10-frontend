import cn from "classnames";
import { useMemo } from "react";
import styles from "./CircularIndicator.module.css";

export interface CircularIndicatorProps {
  className?: string;
  current: number;
  totalCount: number;
}

export function CircularIndicator(props: CircularIndicatorProps) {
  const { className, current, totalCount } = props;
  const arr = useMemo(() => {
    return Array.from({ length: totalCount });
  }, [totalCount]);

  return (
    <div className={cn(styles.wrap, className)}>
      {arr.map((_, index) => {
        const active = current === index;
        return (
          <div
            key={index}
            className={active ? styles["active-item"] : styles.item}
          />
        );
      })}
    </div>
  );
}

export default CircularIndicator;
