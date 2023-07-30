import cn from "classnames";
import styles from "./Button.module.css";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { className, children, ...restProps } = props;
  return (
    <button {...restProps} className={cn(styles.wrap, className)}>
      {children}
    </button>
  );
}

export default Button;
