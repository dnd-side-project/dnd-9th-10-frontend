import cn from 'classnames'
import styles from './BasedMyCheckList.module.css';

export interface BasedMyCheckListProps {
  className?: string
}

export function BasedMyCheckList(props: BasedMyCheckListProps) {
  const { className } = props
  return <div className={cn(styles.wrap, className)}>hello world</div>;
}

export default BasedMyCheckList;
