import cn from "classnames";
import styles from "./ProfileImage.module.css";
import Image from "next/image";

export interface ProfileImageProps {
  className?: string;
  alt: string;
  src: any;
  size: number;
}

export function ProfileImage(props: ProfileImageProps) {
  const { className, alt, src, size } = props;
  return (
    <div
      className={cn(styles.wrap, className)}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        className={styles.image}
        width={size}
        height={size}
        alt={alt}
        src={src}
      />
    </div>
  );
}

export default ProfileImage;
