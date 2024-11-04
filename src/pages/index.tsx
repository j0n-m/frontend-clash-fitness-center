import FitnessInfoCards from "../components/Index/Sections/FitnessInfoCards";
import HeroSection from "../components/Index/Sections/HeroSection";
import WhoWeAreSection from "../components/Index/Sections/WhoWeAreSection";
import FeaturedClassesSection from "../components/Index/Sections/FeaturedClasses/FeaturedClassesSection";
import JoinUsBanner from "../components/Index/Sections/JoinUsBanner";
import WhyChooseUs from "../components/Index/Sections/WhyChooseUs";
import GymTrainersSection from "../components/Index/Sections/GymTrainersSection";
import NetworkPartners from "../components/Index/Sections/NetworkPartners";
import PricingSection from "../components/Index/Sections/PricingSection";
import LatestBlogSection from "../components/Index/Sections/LatestBlogSection";
import ContactFitnessTrainer from "../components/Index/Sections/ContactFitnessTrainer";

function Index() {
  return (
    <main>
      <HeroSection />
      <FitnessInfoCards />
      <WhoWeAreSection />
      <FeaturedClassesSection />
      <JoinUsBanner />
      <WhyChooseUs />
      <GymTrainersSection />
      <NetworkPartners />
      <PricingSection />
      <LatestBlogSection />
      <ContactFitnessTrainer />
      <footer className="text-center">footer</footer>
    </main>
  );
}

export default Index;
