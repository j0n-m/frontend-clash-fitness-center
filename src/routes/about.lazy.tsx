import { createLazyFileRoute } from "@tanstack/react-router";
import About from "../components/About/About";

export const Route = createLazyFileRoute("/about")({
  component: () => <About />,
});
