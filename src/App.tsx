import {
  NavigateOptions,
  Outlet,
  ToOptions,
  useRouter,
} from "@tanstack/react-router";
import Nav from "./components/NavigationBar/Nav";
import Footer from "./components/Footer/Footer";
import { RouterProvider } from "react-aria-components";
import { ScrollRestoration } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";

declare module "react-aria-components" {
  interface RouterConfig {
    href: ToOptions["to"];
    routerOptions: NavigateOptions;
  }
}
function App() {
  const router = useRouter();

  return (
    <>
      <RouterProvider
        navigate={(to, options) => router.navigate({ to, ...options })}
        useHref={(to) => router.buildLocation({ to }).href}
      >
        <HelmetProvider>
          <Nav />
          <ScrollRestoration />
          <Outlet></Outlet>
          <Footer />
        </HelmetProvider>
      </RouterProvider>
    </>
  );
}

export default App;
