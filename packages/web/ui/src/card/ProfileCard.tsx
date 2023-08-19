import cn from "classnames";
import styles from "./ProfileCard.module.css";
import Image from "next/image";
import Icon from "../icon/Icon";
import { Bold19, Medium15 } from "../text/Typographies";
import ProfileImage from "../image/ProfileImage";

export interface ProfileCardProps {
  className?: string;
  name: string;
  profileUrl: string;
  oauth2Provider: "GUEST" | "KAKAO";
}

export function ProfileCard(props: ProfileCardProps) {
  const { className, name, profileUrl, oauth2Provider } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles["profile-group"]}>
        {profileUrl ? (
          <ProfileImage alt="profile" src={profileUrl} size={62} />
        ) : (
          <Icon name="profile" size={62} />
        )}
      </div>
      <div className={styles.content}>
        <Bold19 className={styles.name}>{name ? name : "소중한 나"}</Bold19>
        <Medium15 className={styles.type}>
          {oauth2Provider === "KAKAO" ? "카카오 로그인" : "게스트 로그인"}
        </Medium15>
      </div>
    </div>
  );
}

export default ProfileCard;
