import cn from "classnames";
import styles from "./Success.module.css";
import * as animationData from "./json/success_animation.json";
import Lottie from "react-lottie";

export interface SuccessProps {
  className?: string;
}

export function Success(props: SuccessProps) {
  const { className } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    isClickToPauseDisabled: false,
  };

  return (
    <div className={cn(styles.wrap, className)}>
      <Lottie options={defaultOptions} width={124} height={124} />
    </div>
  );
}

export default Success;
