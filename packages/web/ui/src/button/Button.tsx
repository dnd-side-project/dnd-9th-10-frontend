import cn from "classnames";
import styles from "./Button.module.css";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps) {
  const { className, children, onClick, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(styles.wrap, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
