import { Outlet } from "react-router-dom";
import { Header, Navbar, MainFooter } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen">

      <Outlet />
      </div>
      <MainFooter />
    </>
  );
}

export default HomeLayout;
