import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";
import { tenantRoles, userRoles } from "./routeConfig";

const delayTime = 1000;

export const adminRoutes = [
  {
    path: "/dashboard",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/DashBoard"))
    ),
    exact: true,
    role: tenantRoles.concat(userRoles),
  },

  {
    path: "/pricingPlans",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PricingPlan/PricingPlanListing"))
    ),
    exact: true,
    role: tenantRoles,
  },
  {
    path: "/assignItems/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/PricingPlan/PricingPlanListing/AssignItems")
      )
    ),
    exact: true,
    role: tenantRoles,
  },
];
