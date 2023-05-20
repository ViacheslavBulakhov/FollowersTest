import toast from "react-hot-toast";

export const notifySucces = () => toast.success(`That's all users`);
export const notifyError = (error) =>
  toast.error(`Something went wrong ${error}`);
