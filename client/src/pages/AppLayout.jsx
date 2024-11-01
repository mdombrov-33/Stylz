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
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
