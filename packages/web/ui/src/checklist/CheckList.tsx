import cn from "classnames";
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./CheckList.module.css";
import CheckListItem, { CheckListItemProps } from "./CheckListItem";

export interface CheckListProps {
  type: "good" | "bad";
  className?: string;
  data: CheckListItemProps[];
  onChangeNameByIndex?: (params: { index: number; name: string }) => void;
  onCheckedByIndex?: (params: { index: number; checked: boolean }) => void;
  onDeleteByIndex?: (index: number) => void;
}

export function CheckList(props: CheckListProps) {
  const {
    className,
    type,
    data,
    onChangeNameByIndex,
    onCheckedByIndex,
    onDeleteByIndex,
  } = props;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelectedByIndex = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      setSelectedIndex(index);
      return;
    },
    []
  );

  const handleChangeNameByIndex = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeNameByIndex?.({
        index,
        name: e.target.value,
      });
      return;
    },
    [onChangeNameByIndex]
  );

  const handleCheckedByIndex = useCallback(
    (index: number) => (e: React.MouseEvent, checked: boolean) => {
      onCheckedByIndex?.({
        index,
        checked,
      });
      return;
    },
    [onCheckedByIndex]
  );

  const handleDeleteByIndex = useCallback(
    (index: number) => () => {
      onDeleteByIndex?.(index);
      if (selectedIndex === index) {
        setSelectedIndex(null);
      }
      return;
    },
    [onDeleteByIndex, selectedIndex]
  );

  return (
    <div className={cn(styles.wrap, className)}>
      {data.map((item, index) => {
        const { name } = item;
        return (
          <CheckListItem
            key={type + index}
            className={cn(styles.item)}
            selected={index === selectedIndex}
            name={name}
            onSelected={handleSelectedByIndex(index)}
            onChecked={handleCheckedByIndex(index)}
            onChangeText={handleChangeNameByIndex(index)}
            onDelete={handleDeleteByIndex(index)}
          />
        );
      })}
    </div>
  );
}

export default CheckList;
