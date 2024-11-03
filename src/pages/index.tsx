import FitnessInfoCards from "../components/Index/Sections/FitnessInfoCards";
import HeroSection from "../components/Index/Sections/HeroSection";
import WhoWeAreSection from "../components/Index/Sections/WhoWeAreSection";
import FeaturedClassesSection from "../components/Index/Sections/FeaturedClasses/FeaturedClassesSection";
import JoinUsBanner from "../components/Index/Sections/JoinUsBanner";
import WhyChooseUs from "../components/Index/Sections/WhyChooseUs";

function Index() {
  return (
    <main>
      <HeroSection />
      <FitnessInfoCards />
      <WhoWeAreSection />
      <FeaturedClassesSection />
      <JoinUsBanner />
      <WhyChooseUs />
    </main>
  );
}

export default Index;
