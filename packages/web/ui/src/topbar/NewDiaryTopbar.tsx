import cn from "classnames";
import styles from "./NewDiaryTopbar.module.css";

export interface NewDiaryTopbarProps {
  className?: string;
}

export function NewDiaryTopbar(props: NewDiaryTopbarProps) {
  const { className } = props;
  return <div className={cn(styles.wrap, className)}>hello world</div>;
}

export default NewDiaryTopbar;
