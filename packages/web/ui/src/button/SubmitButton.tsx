import cn from "classnames";
import styles from "./SubmitButton.module.css";
import { Bold16 } from "../text/Typographies";
export interface SubmitButtonProps {
  name: string;
  onSubmit?: (e: React.MouseEvent) => void;
}

export function SubmitButton(props: SubmitButtonProps) {
  const { name, onSubmit } = props;
  return (
    <button className={cn(styles.wrap)} onClick={onSubmit}>
      <Bold16 className={cn(styles.content)}>{name}</Bold16>
    </button>
  );
}

export default SubmitButton;
