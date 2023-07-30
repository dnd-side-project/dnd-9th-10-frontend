import cn from "classnames";
import styles from "./SubmitButton.module.css";
import { Bold16 } from "../text/Typographies";
import { useCallback } from "react";
export interface SubmitButtonProps {
  className?: string;
  name: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function SubmitButton(props: SubmitButtonProps) {
  const { className, name, onClick, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={cn(className, styles.wrap)}
      onClick={onClick}
    >
      <Bold16 className={cn(styles.content)}>{name}</Bold16>
    </button>
  );
}

export default SubmitButton;
