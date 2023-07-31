import cn from "classnames";
import styles from "./SearchTextInput.module.css";
import TextInput, { TextInputProps } from "./TextInput";
import Icon from "../icon/Icon";

export interface SearchTextInputProps extends TextInputProps {
  className?: string;
}

export function SearchTextInput(props: SearchTextInputProps) {
  const { className, ...restProps } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <TextInput className={styles["input"]} {...restProps} />
      <Icon className={styles["icon"]} name={"search"} size={20} />
    </div>
  );
}

export default SearchTextInput;
