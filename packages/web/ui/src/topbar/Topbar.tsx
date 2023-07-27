import cn from "classnames";
import styles from "./Topbar.module.css";
import IconButton from "../button/IconButton";

export interface TopbarProps {
  className?: string;
  title?: React.ReactNode;
  onBackClick?: (e: React.MouseEvent) => void;
  RightComponent?: React.ReactNode;
}

export function Topbar(props: TopbarProps) {
  const { className, title, RightComponent, onBackClick } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      {title && <div className={cn(styles["title"])}>{title}</div>}
      {onBackClick ? (
        <IconButton
          className={cn(styles["back_button"])}
          name="icon_back"
          onClick={onBackClick}
        />
      ) : null}
      {RightComponent ? RightComponent : null}
    </div>
  );
}

export default Topbar;
