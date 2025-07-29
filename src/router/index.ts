import { createBrowserRouter } from "react-router";
import ErrorPage from "../app/error";
import App from "../app/layout";
import { lazy } from "react";

const Home = lazy(() => import("../app/home"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
