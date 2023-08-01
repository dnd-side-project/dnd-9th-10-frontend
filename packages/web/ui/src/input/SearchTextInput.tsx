import cn from "classnames";
import styles from "./SearchTextInput.module.css";
import TextInput, { TextInputProps } from "./TextInput";
import Icon from "../icon/Icon";
import IconButton from "../button/IconButton";

export interface SearchTextInputProps extends TextInputProps {
  className?: string;
  onSearch?: () => void;
}

export function SearchTextInput(props: SearchTextInputProps) {
  const { className, onSearch, ...restProps } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <TextInput className={styles["input"]} {...restProps} />
      <IconButton
        className={styles["icon"]}
        name={"search"}
        size={20}
        onClick={onSearch}
      />
    </div>
  );
}

export default SearchTextInput;
