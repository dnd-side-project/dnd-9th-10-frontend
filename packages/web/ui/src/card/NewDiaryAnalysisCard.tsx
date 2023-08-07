import cn from "classnames";
import { Bold19, Medium14 } from "../text/Typographies";
import styles from "./NewDiaryAnalysisCard.module.css";
import Image from "next/image";
import { images } from "@dnd9-10/shared/src/libs/images";

export interface NewDiaryAnalysisCardProps {
  className?: string;
}

export function NewDiaryAnalysisCard(props: NewDiaryAnalysisCardProps) {
  const { className } = props;
  return (
    <div className={cn(styles.wrap, className)}>
      <Image
        className={styles.image}
        width={163}
        height={136}
        alt="new"
        src={images.NEW_DIARY_ANALYSIS}
      />
      <Bold19 className={styles.description}>
        {`김도리님은 나의 친구 기준에서 `}
        <br />
        <span className={styles.highlight}>67%정도 벗어났어요</span>
      </Bold19>
      <Medium14 className={styles.caption}>친구와의 점수는 내가 체크한 친구 기준으로 측정돼요.</Medium14>
    </div>
  );
}

export default NewDiaryAnalysisCard;
