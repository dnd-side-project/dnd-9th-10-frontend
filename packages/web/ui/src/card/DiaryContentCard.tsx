import cn from "classnames";
import styles from "./DiaryContentCard.module.css";
import * as Toolbar from "@radix-ui/react-toolbar";
import { Medium14 } from "../text/Typographies";
import Icon from "../icon/Icon";

export interface DiaryContentCardProps {
  className?: string;
  content: string;
  TooltipComponent: React.ReactNode
}

export function DiaryContentCard(props: DiaryContentCardProps) {
  const { className, content, TooltipComponent } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Medium14 className={styles.content}>{content}</Medium14>
      <div className={styles.toolbar}>
        {TooltipComponent}
      </div>
    </div>
  );
}

export default DiaryContentCard;
