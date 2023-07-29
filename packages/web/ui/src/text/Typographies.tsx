import cn from "classnames";
import { CSSProperties } from "react";
import styles from "./Typographies.module.css";

export interface TypographiesProps {
  as?: "div" | "span";
  className?: string;
  style?: CSSProperties
  children: React.ReactNode;
}

export function Bold22(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent className={cn(styles["bold22"], className)} {...restProps}>
      {children}
    </TargetComponent>
  );
}

export function Bold16(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent className={cn(styles["bold16"], className)} {...restProps}>
      {children}
    </TargetComponent>
  );
}

export function Semibold14(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["semibold14"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Medium12(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["medium12"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Medium16(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["medium16"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Regular14(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["regular14"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}
