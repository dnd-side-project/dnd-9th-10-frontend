import cn from "classnames";
import Icon from "../icon/Icon";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  className?: string;
  children: React.ReactNode;
}

export function Tooltip(props: TooltipProps) {
  const { className, children } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Icon className={cn(styles.tooltip)} name="tooltip" />
      {children}
    </div>
  );
}

export default Tooltip;
