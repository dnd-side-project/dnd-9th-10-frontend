import cn from "classnames";
import styles from "./DiaryContentCard.module.css";
import * as Toolbar from "@radix-ui/react-toolbar";
import { Medium14 } from "../text/Typographies";
import Icon from "../icon/Icon";

export interface DiaryContentCardProps {
  className?: string;
  content: string;
  onSticker?: () => void;
  onEdit?: () => void;
  onChecked?: () => void;
  onDelete?: () => void;
}

export function DiaryContentCard(props: DiaryContentCardProps) {
  const { className, content, onSticker, onEdit, onChecked, onDelete } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Medium14 className={styles.content}>{content}</Medium14>
      <Toolbar.Root className={styles.toolbar}>
        <Toolbar.Button onClick={onSticker}>
          <Icon name="sticker" />
        </Toolbar.Button>
        <Toolbar.Button onClick={onEdit}>
          <Icon name="modify" />
        </Toolbar.Button>
        <Toolbar.Button onClick={onChecked}>
          <Icon name="checked" />
        </Toolbar.Button>
        <Toolbar.Button onClick={onDelete}>
          <Icon name="remove" />
        </Toolbar.Button>
      </Toolbar.Root>
    </div>
  );
}

export default DiaryContentCard;
