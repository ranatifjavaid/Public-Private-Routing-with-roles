import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";
import { adminRoles } from "./routeConfig";

const delayTime = 1000;

export const superAdminRoutes = [
  {
    path: "/dashboard",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/SuperAdminPages/DashBoard"))
    ),
    exact: true,
    role: adminRoles,
  },
  {
    path: "/subAdmin",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/SuperAdminPages/SubAdmins/AdminListing"))
    ),
    exact: true,
    role: adminRoles,
  },
  {
    path: "/subAdmin/editsubAdmin/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/SuperAdminPages/SubAdmins/EditAdmin")
      )
    ),
    exact: true,
    role: adminRoles,
  },
  {
    path: "/organizations",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/SuperAdminPages/Organizations/OrganizationListing")
      )
    ),
    exact: true,
    role: adminRoles,
  },
  {
    path: "/organizations/editOrganization/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/SuperAdminPages/Organizations/EditOrganization")
      )
    ),
    exact: true,
    role: adminRoles,
  },
  {
    path: "/pricingPlans",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PricingPlan/PricingPlanListing"))
    ),
    exact: true,
    role: adminRoles,
  },
  {
    path: "/pricingPlans/updatePricingPlan/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PricingPlan/UpdatePricingPlan"))
    ),
    exact: true,
    role: adminRoles,
  },
  {
    path: "/settings",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/SuperAdminPages/Settings"))
    ),
    exact: true,
    role: adminRoles,
  },
];
