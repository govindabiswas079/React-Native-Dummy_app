import { lazy } from "react";
import Loadable from "../Suspense_Component/Loadable";

export const HomeScreen = Loadable(lazy(() => import('./HomeScreen')))
export const DetailsScreen = Loadable(lazy(() => import('./DetailsScreen')))
export const AccountScreen = Loadable(lazy(() => import('./AccountScreen')))
