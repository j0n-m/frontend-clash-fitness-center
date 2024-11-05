import PricingSection from "../../components/Index/Sections/PricingSection";
import LandingHeader from "../../components/LandingHeader";

function PricingPage() {
  return (
    <section>
      <LandingHeader text="Pricing" />
      <div className="content">
        <PricingSection />
      </div>
    </section>
  );
}

export default PricingPage;
