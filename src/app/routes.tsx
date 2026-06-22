import { createHashRouter } from "react-router";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

export const router = createHashRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
]);
