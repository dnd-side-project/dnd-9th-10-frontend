import cn from 'classnames'
import styles from './DiaryContentCard.module.css';

export interface DiaryContentCardProps {
  className?: string
  content: string;
}

export function DiaryContentCard(props: DiaryContentCardProps) {
  const { className, content } = props
  return <div className={cn(styles.wrap, className)}>{content}</div>;
}

export default DiaryContentCard;
