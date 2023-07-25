import cn from "classnames";
import styles from "./IconButton.modules.css";
import Icon, { IconType } from "../icon/Icon";

export interface IconButtonProps {
  className?: string;
  name: IconType;
}

export function IconButton(props: IconButtonProps) {
  const { className, name } = props;
  return (
    <button className={cn(styles.wrap, className)}>
      <Icon name={name} />
    </button>
  );
}

export default IconButton;
