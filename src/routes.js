import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Main",
    exact: true,
    component: lazy(() => import("./pages/MainPage")),
    private: false,
    restricted: false,
  },
  {
    path: "/auth/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./pages/RegistrationPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/auth/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./pages/LoginPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/calculator",
    label: "Calculator",
    exact: true,
    component: lazy(() => import("./pages/CalculatorPage/CalculatorPage")),
    private: true,
    restricted: false,
  },
  {
    path: "/daily-rate",
    label: "Diary",
    exact: true,
    component: lazy(() => import("./pages/DiaryPage/DiaryPage")),
    private: true,
    restricted: false,
  },
];
