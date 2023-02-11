import { lazy } from "react";
import Loadable from "../Suspense_Component/Loadable";

export const UserScreen = Loadable(lazy(() => import('./UserScreen')))
export const UserPostScreen = Loadable(lazy(() => import('./UserPostScreen')))
