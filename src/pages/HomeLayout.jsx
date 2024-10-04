import { Outlet } from "react-router-dom";
import { Header, Navbar, MainFooter } from "../components";
import ScrollToTop from "../components/utils/ScrollToTop";

function HomeLayout() {
  return (
    <>
      <ScrollToTop />
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
