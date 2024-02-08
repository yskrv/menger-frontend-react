import axiosInstance from "./instance";
import { User } from "../utils/interfaces/userInterfaces";

export const getMe = async (): Promise<User> => {
  try {
    const res = await axiosInstance.get<User>('/users', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}