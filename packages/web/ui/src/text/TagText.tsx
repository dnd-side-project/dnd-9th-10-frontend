import cn from "classnames";
import styles from "./TagText.module.css";

export interface TagTextProps {
  className?: string;
  active: boolean;
  size: "small" | "medium";
  children: React.ReactNode;
}

export function TagText(props: TagTextProps) {
  const { className, active, size = "small", children } = props;
  return (
    <div
      className={cn(styles.wrap, styles[size], className, {
        [styles["selected-" + size]]: active,
      })}
    >
      {children}
    </div>
  );
}

export default TagText;
