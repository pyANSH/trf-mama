import { createBrowserRouter } from "react-router-dom";
import { landingPageRoutes } from "./landingPage";
import { onboardRoutes } from "./onboard";

export const router = createBrowserRouter([
   ...landingPageRoutes,...onboardRoutes
  ]);