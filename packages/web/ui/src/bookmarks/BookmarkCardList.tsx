import cn from 'classnames'
import styles from './BookmarkCardList.module.css';
import {BookmarkCard, BookmarkCardProps} from "./BookmarkCard";

export interface BookmarkCardListProps {
  className?: string
  data: BookmarkCardProps[]
}

export function BookmarkCardList(props: BookmarkCardListProps) {
  const { className , data} = props
  return <div className={cn(styles.wrap, className)}>
    {data?.map((item, index) => {
      const {id, description, reference, active } = item
      return <BookmarkCard key={index} id={id} description={description} reference={reference} active={active}/>
    })}
  </div>;
}

export default BookmarkCardList;
