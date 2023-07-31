import cn from "classnames";
import styles from "./DiaryCard.module.css";

export interface DiaryCardProps {
  className?: string;
  date: string;
  description: string;
  tags: string[];
  emoji: string;
}

export function DiaryCard(props: DiaryCardProps) {
  const { className } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles.content}>
        <div className={styles.date}>date</div>
        <div className={styles.description}>test</div>
        <div className={styles.tags}>
          <div>test</div>
        </div>
      </div>
    </div>
  );
}

export default DiaryCard;
