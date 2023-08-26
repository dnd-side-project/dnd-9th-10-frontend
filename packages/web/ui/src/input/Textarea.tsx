import cn from "classnames";
import styles from "./Textarea.module.css";

export interface TextareaProps {
  className?: string;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  error?: {
    type: "required";
    text: string;
  };
}

export function Textarea(props: TextareaProps) {
  const { className, textareaProps: inputProps, error } = props;

  return (
    <div className={cn(styles.wrap, className)}>
      <textarea className={styles.input} {...inputProps} />
      {error?.type === "required" && <p role="alert">{error?.text}</p>}
    </div>
  );
}

export default Textarea;
