import { lazy } from "react";
import Loadable from "../Suspense_Component/Loadable";

export const SplashScreen = Loadable(lazy(() => import('./SplashScreen')))
export const LoginScreen = Loadable(lazy(() => import('./LoginScreen')))
export const RegisterScreen = Loadable(lazy(() => import('./RegisterScreen')))
export const OtpVerifyScreen = Loadable(lazy(() => import('./OtpVerifyScreen')))
