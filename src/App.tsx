import { Outlet } from "@tanstack/react-router";
import Nav from "./components/NavigationBar/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default App;
