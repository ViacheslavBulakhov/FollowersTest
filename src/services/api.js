import axios from "axios";
import { notifyError, notifySucces } from "utils/toastUtils";

axios.defaults.baseURL = "https://64511247e1f6f1bb22a72c81.mockapi.io/api/v1";

export async function fetchUsers({ setUsers, page }) {
  try {
    const { data } = await axios.get(`/users?p=${page}&l=3`);
    if (data.length === 0) {
      notifySucces();
      return;
    }

    setUsers((prevState) => [...prevState, ...data]);
  } catch (error) {
    notifyError(error.message);
    console.log(error.message);
  }
}
