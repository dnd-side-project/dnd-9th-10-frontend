import React from "react";
import cn from "classnames";
import styles from "./Toast.module.css";
import Icon from "../icon/Icon";
import { Medium12 } from "../text/Typographies";
import { CustomContentProps } from "notistack";

export interface ToastProps extends CustomContentProps {
  className?: string;
  type: "error" | "info";
  message: React.ReactNode;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  function Toast(props: ToastProps, ref) {
    const { className, message, type } = props;
    return (
      <div
        className={cn(styles.wrap, styles["wrap-" + type], className)}
        ref={ref}
      >
        <Icon className={styles.icon} name="warn" />
        <Medium12 className={styles.message}>{message}</Medium12>
      </div>
    );
  }
);

export const ErrorToast = React.forwardRef<HTMLDivElement, ToastProps>(
  function ErrorToast(props: ToastProps, ref) {
    return <Toast ref={ref} {...props} type="error" />;
  }
);

export const InfoToast = React.forwardRef<HTMLDivElement, ToastProps>(
  function InfoToast(props: ToastProps, ref) {
    return <Toast ref={ref} {...props} type="info" />;
  }
);

export default Toast;
