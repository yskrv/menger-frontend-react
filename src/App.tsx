import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "./hooks/reduxHooks";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { setActiveUser } from "./redux/slices/user.slice";
import Loader from "./components/Loader";
import axiosInstance from "./api/instance";
import { useAuth } from "./hooks/useAuth";
import Sidebar from "./components/Sidebar";

const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isAuth = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const setUser = async () => {
      if (token) {
        try {
          const { data } = await axiosInstance.get("/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          dispatch(setActiveUser({ token, user: data }));
        } catch (error) {
          console.error(error);
        }
      }
      setIsLoading(false);
    };

    setUser();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader isLarge={true} />
      </div>
    );
  }

  return isAuth ? (
    <div className="app">
      {isAuth && <Sidebar />}
      <div className="content">
        <AppRouter />
      </div>
    </div>
  ) : (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
