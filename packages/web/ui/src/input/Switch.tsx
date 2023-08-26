import cn from "classnames";
import styles from "./Switch.module.css";
import * as RSwitch from "@radix-ui/react-switch";

export interface SwitchProps {
  className?: string;
}

export function Switch(props: SwitchProps) {
  const { className } = props;
  return (
    <RSwitch.Root
      className={cn(styles.wrap, styles["SwitchRoot"], className)}
      id="airplane-mode"
    >
      <RSwitch.Thumb className={styles["SwitchThumb"]} />
    </RSwitch.Root>
  );
}

export default Switch;
