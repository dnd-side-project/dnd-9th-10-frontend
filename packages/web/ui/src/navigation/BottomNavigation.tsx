import cn from "classnames";
import React, { useCallback } from "react";
import IconButton from "../button/IconButton";
import Icon from "../icon/Icon";
import { Medium12 } from "../text/Typographies";
import styles from "./BottomNavigation.module.css";

export type BottomTabs = "home" | "my";

export interface BottomNavigationProps {
  className?: string;
  active?: BottomTabs;
  onSelected: (tab: BottomTabs) => void;
  onAdd: () => void
}

const activeStyles = {
  iconColor: "#5E6E96",
  textColor: "#484848",
};
const inactiveStyles = {
  iconColor: "#AEAEAE",
  textColor: "#AEAEAE",
};

export function BottomNavigation(props: BottomNavigationProps) {
  const { className, active, onSelected, onAdd } = props;
  const activeHome = active === "home";
  const activeMy = active === "my";

  const handleSelected = useCallback(
    (tab: BottomTabs) => (e: React.MouseEvent) => {
      onSelected(tab);
    },
    [onSelected]
  );

  return (
    <div className={cn(styles.wrap, className)}>
      <div className={cn(styles["add-group"])}>
        <IconButton className={cn(styles["add"])} name="plus" onClick={onAdd} />
      </div>
      <div className={cn(styles["item-group"])}>
        <div className={cn(styles["item"])} onClick={handleSelected('home')}>
          <Icon
            className={cn(styles["item-icon"])}
            name="home"
            color={
              activeHome ? activeStyles.iconColor : inactiveStyles.iconColor
            }
          />
          <Medium12
            style={{
              color: activeHome
                ? activeStyles.textColor
                : inactiveStyles.textColor,
            }}
          >
            홈
          </Medium12>
        </div>
      </div>
      <div className={cn(styles["item-group"])}>
        <div className={cn(styles["item"])} onClick={handleSelected('my')}>
          <Icon
            className={cn(styles["item-icon"])}
            name="my"
            color={activeMy ? activeStyles.iconColor : inactiveStyles.iconColor}
          />
          <Medium12
            style={{
              color: activeMy
                ? activeStyles.textColor
                : inactiveStyles.textColor,
            }}
          >
            내정보
          </Medium12>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
