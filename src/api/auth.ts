import { AuthResponse, LoginDto } from "../utils/interfaces/authInterfaces"
import axiosInstance from "./instance"


export const login = async (dto: LoginDto): Promise<AuthResponse> => {
  try {
    const res = await axiosInstance.post<AuthResponse>('/auth/login', dto);
    return res.data;
  } catch (err) {
    throw err;
  }
}