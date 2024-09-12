import { Outlet } from "react-router-dom";
import { Header, Navbar, MainFooter } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <MainFooter />
    </>
  );
}

export default HomeLayout;
