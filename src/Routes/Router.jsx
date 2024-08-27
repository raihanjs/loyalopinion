import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";

import Home from "../pages/Home/Home";
import AboutPage from "../pages/AboutPage/AboutPage";
import RewardsPage from "../pages/RewardsPage/RewardsPage";
import HowItWorksPage from "../pages/HowItWorksPage/HowItWorksPage";
import HelpPage from "../pages/HelpPage/HelpPage";
import TermsPage from "../pages/TermsPage/TermsPage";
import PrivacyPage from "../pages/PrivacyPage/PrivacyPage";
import QualifyOne from "../pages/SurveyQualifyPage/QualifyOne";
import SurveyLayout from "../Layouts/SurveyLayout/SurveyLayout";
import QualifyTwo from "../pages/SurveyQualifyPage/QualifyTwo";

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
      {
        path: "/how-it-works",
        element: <HowItWorksPage />,
      },
      {
        path: "/help",
        element: <HelpPage />,
      },
      {
        path: "/terms",
        element: <TermsPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
    ],
  },
  {
    path: "/survey",
    element: <SurveyLayout />,
    children: [
      {
        path: "/survey",
        element: <QualifyOne />,
      },
      {
        path: "qualify-question-2",
        element: <QualifyTwo />,
      },
    ],
  },
]);
