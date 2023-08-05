import cn from "classnames";
import styles from "./SubmitButton.module.css";
import { Bold16 } from "../text/Typographies";
export interface SubmitButtonProps {
  className?: string;
  type?: "" | "disabled" | "warn" | "kakao";
  name: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function SubmitButton(props: SubmitButtonProps) {
  const { className, type = "", name, onClick, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={cn(className, styles.wrap, {
        [styles[type]]: true,
      })}
      onClick={onClick}
    >
      <Bold16
        className={cn(styles.text, {
          [styles[type + "-text"]]: true,
        })}
      >
        {name}
      </Bold16>
    </button>
  );
}

export default SubmitButton;
