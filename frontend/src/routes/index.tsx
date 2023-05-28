import { createBrowserRouter } from 'react-router-dom';
import { dashboardRoutes } from './dashboard';
import { landingPageRoutes } from './landingPage';
import { onboardRoutes } from './onboard';

export const router = createBrowserRouter([
	...landingPageRoutes,
	...onboardRoutes,
	...dashboardRoutes,
]);
