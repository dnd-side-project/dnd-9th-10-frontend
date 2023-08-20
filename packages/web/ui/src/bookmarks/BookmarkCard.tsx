import cn from "classnames";
import styles from "./BookmarkCard.module.css";
import { Medium12, Semibold15 } from "../text/Typographies";
import IconButton from "../button/IconButton";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteBookmark} from "web/apis/bookmark";
import {GET_BOOKMARKS_QUERY_KEY} from "web/app/bookmarks/page";

export interface BookmarkCardProps {
  className?: string;
  id: number;
  description: string;
  reference: string;
  active: boolean;
}

export function BookmarkCard(props: BookmarkCardProps) {
  const { className, id, description, reference, active } = props;

  const queryClient = useQueryClient();
  const {mutate} = useMutation(deleteBookmark, {
      onSuccess: async () => {
          await queryClient.invalidateQueries(GET_BOOKMARKS_QUERY_KEY)
      }
  })

  const handleBookmark = (id: number) => {
      mutate(id);
  }

  return (
    <div className={cn(styles.wrap, className)}>
      <Semibold15 className={styles.description}>{description}</Semibold15>
      <Medium12 className={styles.reference}>{reference}</Medium12>
      <IconButton
        className={styles["bookmark-button"]}
        name={active ? "bookmark_active" : "bookmark"}
        size={24}
        onClick={() => {handleBookmark(id)}}
      />
    </div>
  );
}

export default BookmarkCard;
