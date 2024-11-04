import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";
import { getAuthTokenDuration } from "@/utils/auth";

function HomeLayout() {
  // Automatically logs out user after 2 hours
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getAuthTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

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
