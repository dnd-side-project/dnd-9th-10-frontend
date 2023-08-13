import cn from "classnames";
import styles from "./SearchTextInput.module.css";
import TextInput, { TextInputProps } from "./TextInput";
import Icon from "../icon/Icon";
import IconButton from "../button/IconButton";
import { useCallback, useState } from "react";

export interface SearchTextInputProps extends TextInputProps {
  className?: string;
  onSearch?: (text: string) => void;
}

export function SearchTextInput(props: SearchTextInputProps) {
  const { className, onSearch, ...restProps } = props;
  const [searchText, setSearchText] = useState("");

  const handleChangeSearchText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  const handleSearchText = useCallback(async () => {
    onSearch?.(searchText);
  }, [onSearch, searchText]);

  return (
    <div className={cn(styles.wrap, className)}>
      <TextInput
        className={styles["input"]}
        {...restProps}
        inputProps={{
          value: searchText,
          onChange: handleChangeSearchText,
        }}
      />
      <IconButton
        className={styles["icon"]}
        name={"search"}
        size={20}
        onClick={handleSearchText}
      />
    </div>
  );
}

export default SearchTextInput;
