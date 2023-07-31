import cn from "classnames";
import styles from "./TextInput.module.css";

export interface TextInputProps {
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  error?: {
    type: "required";
    text: string;
  };
}

export function TextInput(props: TextInputProps) {
  const { className, inputProps, error } = props;

  return (
    <div className={cn(styles.wrap, className)}>
      <input className={styles.input} {...inputProps} />
      {error?.type === "required" && <p role="alert">{error?.text}</p>}
    </div>
  );
}

export default TextInput;
