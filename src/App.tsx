import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </>
  );
}

export default App;
