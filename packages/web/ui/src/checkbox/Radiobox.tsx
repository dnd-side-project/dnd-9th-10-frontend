import cn from "classnames";
import styles from "./Radiobox.module.css";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { useEffect, useState } from "react";

export interface RadioboxProps {
  className?: string;
  checked: boolean;
}

export function Radiobox(props: RadioboxProps) {
  const { className } = props;
  const [checked, setChecked] =
    useState<RadixCheckbox.CheckedState>("indeterminate");

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  return (
    <RadixCheckbox.Root
      className={cn(styles.wrap, className)}
      checked={checked}
    >
      <RadixCheckbox.Indicator className="CheckboxIndicator">
        {checked === true && <div className={styles.checked} />}
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

export default Radiobox;
