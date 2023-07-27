import cn from "classnames";
import styles from "./Typographies.module.css";

export interface TypographiesProps {
  className?: string;
  children: React.ReactNode;
}

export function Bold16(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["bold16"], className)}>{children}</div>;
}

export function Bold22(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["bold22"], className)}>{children}</div>;
}

export function Normal14(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["normal14"], className)}>{children}</div>;
}

export function Normal16(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["normal16"], className)}>{children}</div>;
}
