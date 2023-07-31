import cn from "classnames";
import styles from "./InfoText.module.css";
import { Regular13 } from "./Typographies";
import Icon from "../icon/Icon";

export interface InfoTextProps {
  className?: string;
  children: React.ReactNode;
}

export function InfoText(props: InfoTextProps) {
  const { className, children } = props;
  return (
    <Regular13 className={cn(styles.wrap, className)}>
      <Icon className={styles["info-icon"]} name="warn" size={16} />
      {children}
    </Regular13>
  );
}

export default InfoText;
