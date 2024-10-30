import { Outlet } from "@tanstack/react-router";
import Nav from "./components/NavigationBar/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
    </>
  );
}

export default App;
