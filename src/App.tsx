import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();
  
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
