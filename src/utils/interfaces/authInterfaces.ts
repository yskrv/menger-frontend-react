import { User } from "./userInterfaces";

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User,
  token: string;
}