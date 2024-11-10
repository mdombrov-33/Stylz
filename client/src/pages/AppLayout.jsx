import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";
import { getAuthTokenDuration } from "@/utils/auth";
import toast from "react-hot-toast";

function HomeLayout() {
  const token = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    if (token === "EXPIRED") {
      handleLogout();
      return;
    }

    const tokenDuration = getAuthTokenDuration();
    console.log(tokenDuration);

    const timer = setTimeout(() => {
      handleLogout();
    }, tokenDuration);

    return () => clearTimeout(timer);
  }, [token]);

  const handleLogout = () => {
    // Clear storage and submit logout action
    localStorage.removeItem("access_token");
    localStorage.removeItem("expiration");
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("expiration");

    navigate("/login");
    toast.error("Session expired. Please login again");
  };

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
