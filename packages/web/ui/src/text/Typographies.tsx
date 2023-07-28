import cn from "classnames";
import styles from "./Typographies.module.css";

export interface TypographiesProps {
  className?: string;
  children: React.ReactNode;
}

export function Bold22(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["bold22"], className)}>{children}</div>;
}

export function Bold16(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["bold16"], className)}>{children}</div>;
}

export function Semibold14(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["semibold14"], className)}>{children}</div>;
}

export function Medium16(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["medium16"], className)}>{children}</div>;
}

export function Regular14(props: TypographiesProps) {
  const { className, children } = props;
  return <div className={cn(styles["regular14"], className)}>{children}</div>;
}
