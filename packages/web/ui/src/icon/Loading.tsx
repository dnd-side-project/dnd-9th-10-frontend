import cn from "classnames";
import styles from "./Loading.module.css";
import Lottie from "react-lottie";
import * as animationData from "./json/loading_animation.json";

export interface LoadingProps {
  className?: string;
}

export function Loading(props: LoadingProps) {
  const { className } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    isClickToPauseDisabled: false,
  };

  return (
    <div className={cn(styles.wrap, className)}>
      <Lottie options={defaultOptions} width={183} height={141} />
    </div>
  );
}

export default Loading;
