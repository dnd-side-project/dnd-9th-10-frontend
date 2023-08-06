import cn from "classnames";
import { CSSProperties } from "react";
import styles from "./Typographies.module.css";

export interface TypographiesProps {
  as?: "div" | "span" | "pre" | "p" | 'li';
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
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

export function Bold18(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent className={cn(styles["bold18"], className)} {...restProps}>
      {children}
    </TargetComponent>
  );
}

export function Bold19(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent className={cn(styles["bold19"], className)} {...restProps}>
      {children}
    </TargetComponent>
  );
}

export function Bold20(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent className={cn(styles["bold20"], className)} {...restProps}>
      {children}
    </TargetComponent>
  );
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

export function Semibold15(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["semibold15"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Semibold17(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["semibold17"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}
export function Semibold18(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["semibold18"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Semibold20(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["semibold20"], className)}
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

export function Medium13(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["medium13"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Medium14(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["medium14"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Medium15(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["medium15"], className)}
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

export function Medium17(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["medium17"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Regular13(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["regular13"], className)}
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

export function Regular15(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["regular15"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}

export function Regular16(props: TypographiesProps) {
  const { as = "div", className, children, ...restProps } = props;
  const TargetComponent = as;
  return (
    <TargetComponent
      className={cn(styles["regular16"], className)}
      {...restProps}
    >
      {children}
    </TargetComponent>
  );
}
