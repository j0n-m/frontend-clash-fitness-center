import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "../pages/Contact/ContactPage";

export const Route = createFileRoute("/contact")({
  component: () => <ContactPage />,
});
