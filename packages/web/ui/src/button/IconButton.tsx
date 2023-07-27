import cn from "classnames";
import styles from "./IconButton.module.css";
import Icon, { IconType } from "../icon/Icon";

export interface IconButtonProps {
  className?: string;
  name: IconType;
  onClick?: (e: React.MouseEvent) => void;
}

export function IconButton(props: IconButtonProps) {
  const { className, name, onClick } = props;
  return (
    <button className={cn(styles.wrap, className)} onClick={onClick}>
      <Icon name={name} />
    </button>
  );
}

export default IconButton;
