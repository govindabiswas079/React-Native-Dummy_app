import { lazy } from "react";
import Loadable from "../Suspense_Component/Loadable";

export const ManageScreen = Loadable(lazy(() => import('./ManageScreen')))
export const SettingScreen = Loadable(lazy(() => import('./SettingScreen')))
