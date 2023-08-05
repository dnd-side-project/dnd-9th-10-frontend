import cn from "classnames";
import styles from "./ProfileCard.module.css";
import Image from "next/image";
import Icon from "../icon/Icon";
import { Bold19, Medium15 } from "../text/Typographies";

export interface ProfileCardProps {
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const { className } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles["profile-group"]}>
        <Icon name="profile" size={62} />
      </div>
      <div className={styles.content}>
        <Bold19 className={styles.name}>소중한 나</Bold19>
        <Medium15 className={styles.type}>카카오 로그인</Medium15>
      </div>
    </div>
  );
}

export default ProfileCard;
