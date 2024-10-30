import { createLazyFileRoute } from "@tanstack/react-router";
import MissingPage from "../pages/404/MissingPage";

export const Route = createLazyFileRoute("/")({
  component: Index,
  notFoundComponent: () => <MissingPage />,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome to index!</h3>
    </div>
  );
}
