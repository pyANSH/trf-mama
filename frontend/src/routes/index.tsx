import { createBrowserRouter } from "react-router-dom";
import { landingPageRoutes } from "./landingPage";

export const router = createBrowserRouter([
   ...landingPageRoutes
  ]);