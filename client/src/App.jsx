import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "@/components/Loader";

const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const ShopNew = lazy(() => import("./pages/ShopNew"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Cart = lazy(() => import("./pages/Cart"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const FAQs = lazy(() => import("./pages/ContactRoutes/FAQs"));
const Feedback = lazy(() => import("./pages/ContactRoutes/Feedback"));
const Ordering = lazy(() => import("./pages/ContactRoutes/Ordering"));
const Payment = lazy(() => import("./pages/ContactRoutes/Payment"));
const Returns = lazy(() => import("./pages/ContactRoutes/Returns"));
const Shipping = lazy(() => import("./pages/ContactRoutes/Shipping"));
const SizeGuide = lazy(() => import("./pages/ContactRoutes/SizeGuide"));
const WhyStylz = lazy(() => import("./pages/ContactRoutes/WhyStylz"));
const ContactInfo = lazy(() => import("./pages/ContactRoutes/ContactInfo"));

const ContactLayout = lazy(() => import("./pages/ContactLayout"));

import { action as registerAction } from "@/pages/Register";
import { action as loginAction } from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <ContactLayout />,
        children: [
          {
            path: "contactinfo",
            element: <ContactInfo />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
          {
            path: "ordering",
            element: <Ordering />,
          },
          {
            path: "shipping",
            element: <Shipping />,
          },
          {
            path: "returns",
            element: <Returns />,
          },
          {
            path: "sizeguide",
            element: <SizeGuide />,
          },
          {
            path: "whystylz",
            element: <WhyStylz />,
          },
          {
            path: "feedback",
            element: <Feedback />,
          },
          {
            path: "faqs",
            element: <FAQs />,
          },
        ],
      },
      {
        path: "new",
        element: <ShopNew />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster position="bottom-left" />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
