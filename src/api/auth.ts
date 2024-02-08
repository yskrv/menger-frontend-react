import { AuthResponse, User } from "../utils/interfaces/userInterfaces"
import axiosInstance from "./instance"

type LoginDto = Pick<User, "email" | "password">;
type RegisterDto = Pick<User, "firstName" | "lastName" | "email" | "password" | "type">;

export const login = async (dto: LoginDto): Promise<AuthResponse> => {
  try {
    const res = await axiosInstance.post<AuthResponse>('/auth/login', dto);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export const register = async (dto: RegisterDto): Promise<AuthResponse> => {
  try {
    const res = await axiosInstance.post<AuthResponse>('/auth/register', dto);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export const activate = async (activationCode: string) => {
  try {
    const res = await axiosInstance.post('/auth/activate', { activationCode }, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}