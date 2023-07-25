import cn from "classnames";
import styles from "./Typographies.modules.css";

export interface TypographiesProps {
  className?: string;
  children: React.ReactNode;
}

export function Bold22(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["bold22"], className)}>{children}</div>;
}


export function Normal14(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["normal14"], className)}>{children}</div>;
}
