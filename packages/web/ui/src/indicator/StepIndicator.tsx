import cn from "classnames";
import { Semibold17 } from "../text/Typographies";
import styles from "./StepIndicator.module.css";

export interface StepIndicatorProps {
  className?: string;
  active?: boolean;
  current: number;
  totalCount: number;
}

export function StepIndicator(props: StepIndicatorProps) {
  const { className, active = false, current, totalCount } = props;
  return (
    <Semibold17
      className={cn(
        styles.wrap,
        {
          [styles.active]: active,
        },
        className
      )}
    >{`${current}/${totalCount}`}</Semibold17>
  );
}

export default StepIndicator;
