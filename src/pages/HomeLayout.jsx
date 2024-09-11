import { Outlet } from "react-router-dom";
import { Header, Navbar, Footer } from "../components";

function HomeLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
