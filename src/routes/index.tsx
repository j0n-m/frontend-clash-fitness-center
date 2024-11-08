import { createFileRoute } from "@tanstack/react-router";
import Index from "../pages";

export const Route = createFileRoute("/")({
  component: () => <Index />,
});
