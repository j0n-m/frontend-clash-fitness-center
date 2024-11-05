import { createLazyFileRoute } from "@tanstack/react-router";
import MissingPage from "../pages/404/MissingPage";
import Index from "../pages";

export const Route = createLazyFileRoute("/")({
  component: () => <Index />,
  notFoundComponent: () => <MissingPage />,
  errorComponent: ({ error, reset }) => <p>Error occured</p>,
});
