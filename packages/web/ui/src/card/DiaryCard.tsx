import cn from "classnames";
import Icon from "../icon/Icon";
import TagText from "../text/TagText";
import styles from "./DiaryCard.module.css";

export interface DiaryCardProps {
  className?: string;
  date: string;
  description: string;
  tags: string[];
  emoji: string;
}

export function DiaryCard(props: DiaryCardProps) {
  const { className, date, description, tags } = props;
  return (
    <div className={cn(styles.wrap, className)}>
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
