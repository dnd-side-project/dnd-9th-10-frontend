import { SnackbarProvider } from "notistack";
import Toast, { ErrorToast, InfoToast } from "../toast/Toast";

interface Props {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: Props) => {
  return (
    <SnackbarProvider
      Components={{
        error: ErrorToast,
        info: InfoToast,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};
