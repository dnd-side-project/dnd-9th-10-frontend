import cn from "classnames";
import styles from "./BookmarkCard.module.css";
import { Medium12, Semibold15 } from "../text/Typographies";
import IconButton from "../button/IconButton";

export interface BookmarkCardProps {
  className?: string;
  description: string;
  reference: string;
  active: boolean;
}

export function BookmarkCard(props: BookmarkCardProps) {
  const { className, description, reference, active } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Semibold15 className={styles.description}>{description}</Semibold15>
      <Medium12 className={styles.reference}>{reference}</Medium12>
      <IconButton
        className={styles["bookmark-button"]}
        name={active ? "bookmark_active" : "bookmark"}
        size={24}
      />
    </div>
  );
}

export default BookmarkCard;
