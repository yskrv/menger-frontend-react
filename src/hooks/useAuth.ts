import { RootState } from "../redux/store"
import { useAppSelector } from "./reduxHooks"
import { User } from "../utils/interfaces/userInterfaces"

export const useAuth = () => {
  const user: User | null = useAppSelector((state: RootState) => state.user.user);
  const isAuth: boolean = !!user;
  return isAuth;
}