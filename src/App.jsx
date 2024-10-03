import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Blog,
  HomeLayout,
  ShopNew,
  Catalog,
  Cart,
  ErrorPage,
  Landing,
  Login,
  Register,
} from "./pages";

import {
  FAQs,
  Feedback,
  Ordering,
  Payment,
  Returns,
  Shipping,
  SizeGuide,
  WhyStylz,
  ContactInfo,
} from "./pages/ContactRoutes";
import ContactLayout from "./pages/ContactLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
