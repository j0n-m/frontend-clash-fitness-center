import { Helmet } from "react-helmet-async";
import PricingSection from "../../components/Index/Sections/PricingSection";
import LandingHeader from "../../components/LandingHeader";

function PricingPage() {
  return (
    <section>
      <Helmet>
        <title>Clash Fitness Center | Pricing</title>
      </Helmet>
      <LandingHeader text="Pricing" />
      <div className="content">
        <PricingSection />
      </div>
    </section>
  );
}

export default PricingPage;
