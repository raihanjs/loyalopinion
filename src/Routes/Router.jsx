import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";

import Home from "../pages/Home/Home";
import AboutPage from "../pages/AboutPage/AboutPage";
import RewardsPage from "../pages/RewardsPage/RewardsPage";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rewards",
        element: <RewardsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
