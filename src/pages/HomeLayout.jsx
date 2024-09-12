import { Outlet } from "react-router-dom";
import { Header, Navbar, LandingFooter } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
