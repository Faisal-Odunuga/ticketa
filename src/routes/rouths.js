import { lazy } from "react";
import { allPaths } from "./paths";

const SignIn = lazy(() => import("../pages/auth/SignIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const UserDashboard = lazy(() => import("../pages/dashboards/UserDashboard"));
const VerifyOtp = lazy(() => import("../pages/verify-otp/VerifyOtp"));
const EventDetails = lazy(() => import("../pages/ticket-details/EventDetails"));
const PaymentPage = lazy(() => import("../pages/payment-page/PaymentPage"));
const Home = lazy(() => import("../pages/home/Home"));

export const allRouths = [
  {
    path: allPaths.home,
    component: Home,
  },
  {
    path: allPaths.signIn,
    component: SignIn,
  },
  {
    path: allPaths.signUp,
    component: SignUp,
  },

  {
    path: allPaths.dashboard,
    component: UserDashboard,
  },
  {
    path: allPaths.verifyOtp,
    component: VerifyOtp,
  },
  {
    path: allPaths.eventDetails,
    component: EventDetails,
  },
  {
    path: allPaths.paymentPage,
    component: PaymentPage,
  },
];
