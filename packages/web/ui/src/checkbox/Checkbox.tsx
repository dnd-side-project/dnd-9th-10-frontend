import cn from "classnames";
import styles from "./Checkbox.module.css";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";

export interface CheckboxProps {
  className?: string;
  checked: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function Checkbox(props: CheckboxProps) {
  const { className, onClick } = props;
  const [checked, setChecked] =
    useState<RadixCheckbox.CheckedState>("indeterminate");

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  return (
    <RadixCheckbox.Root
      className={cn(styles.wrap, className)}
      checked={checked}
      onCheckedChange={setChecked}
      onClick={onClick}
    >
      <RadixCheckbox.Indicator className="CheckboxIndicator">
        {checked === true && <CheckIcon color="#fff" />}
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

export default Checkbox;
