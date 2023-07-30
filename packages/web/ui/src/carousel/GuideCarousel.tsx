import Flicking, { FlickingProps } from "@egjs/react-flicking";
import cn from "classnames";
import { useCallback, useRef, useState } from "react";
import SubmitButton from "../button/SubmitButton";
import CircularIndicator from "../indicator/CircularIndicator";
import { Bold22 } from "../text/Typographies";
import { Carousel } from "./Carousel";
import styles from "./GuideCarousel.module.css";
import onboarding1 from "./images/onboarding1.png";
import onboarding2 from "./images/onboarding2.png";
import onboarding3 from "./images/onboarding3.png";

export interface GuideCarouselProps {
  className?: string;
  onNext: () => void;
}

export function GuideCarousel(props: GuideCarouselProps) {
  const { className, onNext } = props;
  const carouselRef = useRef<Flicking>();
  const [page, setPage] = useState(0);
  const totalCount = 3;

  const handlePagination = useCallback((page: number) => {
    setPage(page);
  }, []);

  const handleNext = useCallback(() => {
    if (page === totalCount - 1) {
      onNext();
      return;
    }
    carouselRef.current?.next();
  }, [onNext, page]);

  return (
    <div className={cn(styles.wrap, className)}>
      <Carousel ref={carouselRef} onPagination={handlePagination}>
        <div className={styles.item}>
          <Bold22 as="pre" className={styles.title}>{`거리를 두고 싶은 친구를
등록하고 일화를 작성하세요`}</Bold22>
          <img width={320} src={onboarding1} />
        </div>
        <div className={styles.item}>
          <Bold22 as="pre" className={styles.title}>{`나만의 친구 기준을 정하여
나와 친구의 거리를 확인해요`}</Bold22>
          <img width={320} src={onboarding2} />
        </div>
        <div className={styles.item}>
          <Bold22
            as="pre"
            className={styles.title}
          >{`일화마다 나의 감정을 기록해요`}</Bold22>
          <img width={320} src={onboarding3} />
        </div>
      </Carousel>
      <CircularIndicator
        className={styles.indicator}
        current={page}
        totalCount={totalCount}
      />
      <SubmitButton name="시작하기" onSubmit={handleNext} />
    </div>
  );
}

export default GuideCarousel;
