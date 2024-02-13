import { useAppSelector } from "../../../hooks/reduxHooks";
import { RootState } from "../../../redux/store";

const ProfilePage: React.FC = () => {
  const user = useAppSelector((state: RootState) => state.user.user);

  return (
    <div>
      <h2>Аты: {user?.firstName}</h2>
      <h2>Тегі: {user?.lastName}</h2>
      <h2>E-mail: {user?.email}</h2>
      <h2>Рөлі: {user?.type}</h2>
      {user?.organization && <h2>Ұйым: {user?.organization.name}</h2>}
    </div>
  );
};

export default ProfilePage;
