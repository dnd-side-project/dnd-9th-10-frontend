import * as React from "react";
import Flicking from "@egjs/react-flicking";
import cn from "classnames";
import styles from "./Carousel.module.css";
import "@egjs/react-flicking/dist/flicking.css";

export interface CarouselProps {
  className?: string;
  children: React.ReactNode[];
  onPagination: (page: number) => void;
}

export const Carousel = React.forwardRef(function CarouselRef(
  props: CarouselProps,
  ref: any
) {
  const { className, children, onPagination } = props;

  return (
    <Flicking
      ref={ref}
      className={cn(className, styles.wrap)}
      horizontal={true}
      moveType={["strict", { count: 1 }]}
      onChanged={(e) => {
        onPagination(e.index);
      }}
    >
      {children.map((itemChildren) => {
        return itemChildren
      })}
    </Flicking>
  );
});
