import CoursesSection from "./components/CoursesSection";
import FormSection from "./components/FormSection";
import ForWhomSection from "./components/ForWhomSection";
import HomeSection from "./components/HomeSection";
import PricingSection from "./components/PricingSection";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <HomeSection />
      <CoursesSection />
      <ForWhomSection />
      <PricingSection />
      <FormSection />
    </div>
  );
};

export default HomePage;
