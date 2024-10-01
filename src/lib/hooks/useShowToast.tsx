import {useCallback, useRef} from "react";
import {Id, toast} from "react-toastify";

export const useShowToast = () => {
  const lastToastId = useRef<Id|null>(null);

  const showToast = useCallback((message, type = 'default', options = {}) => {
    if (lastToastId.current) {
      toast.dismiss(lastToastId.current);
    }
    const toastFunction = {
      info: toast.info,
      success: toast.success,
      warning: toast.warning,
      error: toast.error,
      default: toast
    }[type] || toast
    lastToastId.current = toastFunction(message,{ ...options });
  }, []);

  return showToast;
}