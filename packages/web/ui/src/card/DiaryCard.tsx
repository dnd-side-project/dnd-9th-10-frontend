import cn from "classnames";
import Icon from "../icon/Icon";
import TagText from "../text/TagText";
import styles from "./DiaryCard.module.css";

export interface DiaryCardProps {
  className?: string;
  date: string;
  description: string;
  tags: string[];
  emojiUrl: string;
  onClick?: () => void
}

export function DiaryCard(props: DiaryCardProps) {
  const { className, date, description, tags, onClick } = props;
  return (
    <div className={cn(styles.wrap, className)} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.date}>{date}</div>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags?.map((tag, index) => {
            return (
              <TagText key={index} className={styles.tag} size={"small"}>{tag}</TagText>
            )
          })}
        </div>
      </div>
      <div className="emoji-group">
        <Icon name="emoji1" />
      </div>
    </div>
  );
}

export default DiaryCard;
