import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "./hooks/reduxHooks";
import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { setActiveUser } from "./redux/slices/user.slice";
import { User } from "./utils/interfaces/userInterfaces";
import { getMe } from "./api/user";

const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token');
    const setUser = async () => {
      if (token) {
        const user: User = await getMe();
        dispatch(setActiveUser({token, user}));
      }
    }

    setUser();
  }, [dispatch]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </>
  );
}

export default App;
