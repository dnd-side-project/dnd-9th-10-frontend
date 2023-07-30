import cn from "classnames";
import styles from "./Checkbox.module.css";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export interface CheckboxProps {
  className?: string;
}

export function Checkbox(props: CheckboxProps) {
  const { className } = props;
  const [checked, setChecked] =
    useState<RadixCheckbox.CheckedState>("indeterminate");

  return (
    <RadixCheckbox.Root
      className={cn(styles.wrap, className)}
      checked={checked}
      onCheckedChange={setChecked}
    >
      <RadixCheckbox.Indicator className="CheckboxIndicator">
        {checked === true && <CheckIcon color="#fff" />}
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

export default Checkbox;
