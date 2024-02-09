import axiosInstance from "./instance";
import { User } from "../utils/interfaces/userInterfaces";

export const getMe = async (): Promise<User> => {
  try {
    const res = await axiosInstance.get<User>('/users', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });

    console.log(res);
    return res.data;
  } catch (err) {
    console.log('object');
    throw err;
  }
}