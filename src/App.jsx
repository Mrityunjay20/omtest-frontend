import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ErrorPage from "./Layout/Error";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import SingleProduct from "./Pages/SingleProduct";
import Blogs from "./Pages/Blogs";
import SingleBlogPage from "./Pages/SingleBlogPage";
import DiscoverPage from "./Pages/DiscoverPage";
import CheckoutPage from "./Pages/CheckoutPage";
import TermsOfUse from "./Pages/TermsOfUse";
import ReturnPolicy from "./Pages/ReturnPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LoginPage from "./Pages/Login";
import { store } from "./utils/store.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      error: <ErrorPage />,

      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <div>about</div>,
        },
        {
          path: "/product",
          element: (
            <div>
              <Product />
            </div>
          ),
        },
        {
          path: "/blogs",
          element: (
            <div>
              <Blogs />
            </div>
          ),
        },
        {
          path: "/contact",
          element: <div>contact</div>,
        },
        {
          path: "/singleproduct/:id",
          element: (
            <div>
              <SingleProduct />
            </div>
          ),
        },
        {
          path: "/singleproduct",
          element: (
            <div>
              <SingleProduct />
            </div>
          ),
        },
        {
          path: "/singleblog",
          element: (
            <div>
              <SingleBlogPage />
            </div>
          ),
        },
        {
          path: "/discover",
          element: (
            <div>
              <DiscoverPage />
            </div>
          ),
        },
        {
          path: "/checkout",
          element: (
            <div>
              <CheckoutPage />
            </div>
          ),
        },
        {
          path: "/termsofuse",
          element: (
            <div>
              <TermsOfUse />
            </div>
          ),
        },
        {
          path: "/returnpolicy",
          element: (
            <div>
              <ReturnPolicy />
            </div>
          ),
        },
        {
          path: "/privacypolicy",
          element: (
            <div>
              <PrivacyPolicy />
            </div>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
