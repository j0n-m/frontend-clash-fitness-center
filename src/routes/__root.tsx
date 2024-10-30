import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import MissingPage from "../pages/404/MissingPage";
import App from "../App";

export const Route = createRootRoute({
  component: () => (
    <>
      <App />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <MissingPage />,
});
