import { Outlet } from "react-router-dom";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

function HomeLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default HomeLayout;
