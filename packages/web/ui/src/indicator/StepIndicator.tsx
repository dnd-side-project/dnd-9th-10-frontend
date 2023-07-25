import cn from "classnames";
import styles from "./StepIndicator.modules.css";

export interface StepIndicatorProps {
  className?: string;
  current: number;
  totalCount: number;
}

export function StepIndicator(props: StepIndicatorProps) {
  const { className, current, totalCount } = props;
  return (
    <div
      className={cn(styles.wrap, className)}
    >{`${current}/${totalCount}`}</div>
  );
}

export default StepIndicator;
