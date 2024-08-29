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
import QualifyThree from "../pages/SurveyQualifyPage/QualifyThree";
import QualifyFour from "../pages/SurveyQualifyPage/QualifyFour";
import QualifyFive from "../pages/SurveyQualifyPage/QualifyFive";
import GamesSurveyPage from "../pages/GamesSurveyPage/GamesSurveyPage";
import GamesSurveyPageTwo from "../pages/GamesSurveyPage/GamesSurveyPageTwo";
import GamesSurveyPageThree from "../pages/GamesSurveyPage/GamesSurveyPageThree";
import GamesSurveyPageFour from "../pages/GamesSurveyPage/GamesSurveyPageFour";
import SuccessSurvey from "../pages/SuccessSurvey/SuccessSurvey";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import SignUp from "../pages/Auth/SignUp/SignUp";
import ConfirmSignUp from "../pages/Auth/SignUp/ConfirmSignUp";
import Career from "../pages/Career/Career";
import CustomerServiceRepresentative from "../pages/Jobs/CustomerServiceRepresentative";

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
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/career/customer-service-representative",
        element: <CustomerServiceRepresentative />,
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
      // {
      //   path: "qualify-question-2",
      //   element: <QualifyTwo />,
      // },
      // {
      //   path: "qualify-question-3",
      //   element: <QualifyThree />,
      // },
      // {
      //   path: "qualify-question-4",
      //   element: <QualifyFour />,
      // },
      // {
      //   path: "qualify-question-5",
      //   element: <QualifyFive />,
      // },
      // {
      //   path: "survey90eww79ew9ewre6ew97ew7ew70ew07ew",
      //   element: <GamesSurveyPage />,
      // },
      // {
      //   path: "surve9ew9eww9789ew8ewgeryew7ew70ew07ew",
      //   element: <GamesSurveyPageTwo />,
      // },
      // {
      //   path: "survey79eiyyfdqh8e8yewrqew9ewre6ew97ew",
      //   element: <GamesSurveyPageThree />,
      // },
      // {
      //   path: "survey79eiyyfdqresponseyewrqew9ewre6ew",
      //   element: <GamesSurveyPageFour />,
      // },
      // {
      //   path: "success",
      //   element: <SuccessSurvey />,
      // },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "confirm-signup",
        element: <ConfirmSignUp />,
      },
    ],
  },
]);
