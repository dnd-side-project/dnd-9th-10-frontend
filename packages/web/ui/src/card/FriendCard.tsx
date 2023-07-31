import cn from "classnames";
import styles from "./FriendCard.module.css";
import Icon from "../icon/Icon";
import { Bold18, Bold19, Medium13, Medium14 } from "../text/Typographies";
import ProfileImage from "../image/ProfileImage";
import { images } from "@dnd9-10/shared/src/libs/images";
import IconButton from "../button/IconButton";

export interface FriendCardProps {
  className?: string;
  statusText: string;
  name: string;
  diaryCount: number;
}

export function FriendCard(props: FriendCardProps) {
  const { className, statusText, name, diaryCount } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles.content}>
        <div className={styles["profile-group"]}>
          <ProfileImage
            className={styles["profile-image"]}
            alt="profile"
            src={images.FRIEND_PROFILE1}
            size={102}
          />
          <div className={styles["profile-textgroup"]}>
            <Medium13 className={styles["profile-status"]}>
              {statusText}
            </Medium13>
            <Bold19 className={styles["profile-name"]}>{name}</Bold19>
            <Medium14 className={styles["profile-count"]}>
              <Icon name="diary" size={20} />
              {diaryCount}
            </Medium14>
          </div>
        </div>
        <IconButton className={styles["setting-button"]} name="setting" />
      </div>
      <div className={styles.bottom}>
        <div className={styles["bottom-graph"]}>test</div>
        <Bold18 className={styles["bottom-text"]} as="pre">
          {`나의 친구 기준에서 
50% 벗어나요`}
        </Bold18>
      </div>
    </div>
  );
}

export default FriendCard;
