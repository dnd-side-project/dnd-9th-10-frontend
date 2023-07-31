import cn from "classnames";
import styles from "./IconButton.module.css";
import Icon, { IconType, IconProps } from "../icon/Icon";

export interface IconButtonProps extends IconProps {
  className?: string;
  name: IconType;
  onClick?: (e: React.MouseEvent) => void;
}

export function IconButton(props: IconButtonProps) {
  const { className, name, size, onClick, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(styles.wrap, className)}
      onClick={onClick}
    >
      <Icon name={name} size={size} />
    </button>
  );
}

export default IconButton;
