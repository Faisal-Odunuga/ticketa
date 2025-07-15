import { toast } from "react-toastify";

const toastTypes = {
  success: toast.success,
  error: toast.error,
  info: toast.info,
  warning: toast.warning,
};

export const showMessage = (type, message) => {
  const notify = toastTypes[type] || toast;
  notify(message);
};
