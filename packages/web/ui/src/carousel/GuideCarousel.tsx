import Flicking, { FlickingProps } from "@egjs/react-flicking";
import cn from "classnames";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";

import CircularIndicator from "../indicator/CircularIndicator";
import { Bold22 } from "../text/Typographies";
import { Carousel } from "./Carousel";
import styles from "./GuideCarousel.module.css";
import { images } from "@dnd9-10/shared/src/libs/images";

export interface GuideCarouselProps {
  className?: string;
  itemClassName?: string;
}

export function GuideCarousel(props: GuideCarouselProps) {
  const { className, itemClassName } = props;
  const carouselRef = useRef<Flicking>();
  const [page, setPage] = useState(0);
  const totalCount = 3;

  const handlePagination = useCallback((page: number) => {
    setPage(page);
  }, []);

  return (
    <div className={cn(styles.wrap, className)}>
      <Carousel ref={carouselRef} onPagination={handlePagination}>
        <div className={cn(styles.item, itemClassName)}>
          <Bold22 as="pre" className={styles.title}>{`거리를 두고 싶은 친구를
등록하고 일화를 작성하세요`}</Bold22>
          <Image
            className={styles.image}
            alt="onboarding1"
            width={320}
            height={340}
            src={images.ONBOARDING1}
          />
        </div>
        <div className={cn(styles.item, itemClassName)}>
          <Bold22 as="pre" className={styles.title}>{`나만의 친구 기준을 정하여
나와 친구의 거리를 확인해요`}</Bold22>
          <Image
            alt="onboarding2"
            width={320}
            height={340}
            src={images.ONBOARDING2}
          />
        </div>
        <div className={cn(styles.item, itemClassName)}>
          <Bold22 as="pre" className={styles.title}>{`일화마다 감정을 기록하고
생각을 정리해보세요`}</Bold22>
          <Image
            alt="onboarding3"
            width={320}
            height={340}
            src={images.ONBOARDING3}
          />
        </div>
      </Carousel>
      <CircularIndicator
        className={styles.indicator}
        current={page}
        totalCount={totalCount}
      />
    </div>
  );
}

export default GuideCarousel;
