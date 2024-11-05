import { createFileRoute } from "@tanstack/react-router";
import PricingPage from "../pages/Pricing/PricingPage";

export const Route = createFileRoute("/pricing")({
  component: () => <PricingPage />,
});
