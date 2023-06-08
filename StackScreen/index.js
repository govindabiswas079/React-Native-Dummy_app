import { lazy } from "react";
import Loadable from "../Suspense_Component/Loadable";

export const UserScreen = Loadable(lazy(() => import('./UserScreen')))
export const UserPostScreen = Loadable(lazy(() => import('./UserPostScreen')));

export const AgendaScreen = Loadable(lazy(() => import('./AgendaScreen')));
export const CalendarListScreen = Loadable(lazy(() => import('./CalendarListScreen')));
export const TimelineCalendarScreen = Loadable(lazy(() => import('./TimelineCalendarScreen')));
export const MaterialTimePicker = Loadable(lazy(() => import('./MaterialTimePicker')));
export const MaterialDatePicker = Loadable(lazy(() => import('./MaterialDatePicker')));
export const MaterialDateRangePicker = Loadable(lazy(() => import('./MaterialDateRangePicker')));
export const RNCalender = Loadable(lazy(() => import('./RNCalender')));
export const CustomeDatePicker = Loadable(lazy(() => import('./CustomeDatePicker')));
