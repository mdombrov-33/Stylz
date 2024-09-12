import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Blog,
  Contact,
  HomeLayout,
  ShopNew,
  Catalog,
  Cart,
  ErrorPage,
  Landing,
} from "./pages";

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
        element: <Contact />,
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
    element: <h1>Login</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
