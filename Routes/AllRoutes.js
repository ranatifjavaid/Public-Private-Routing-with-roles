import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";
import { Redirect } from "react-router-dom";
import { superAdminRoutes } from "./SuperAdminRoutes";
import { adminRoutes } from "./AdminRoutes";
import { userRoutes } from "./UserRoutes";
import { allRoles } from "./routeConfig";

const delayTime = 2000;

const routes = [
  {
    path: "/login",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/Login"))),
    ispublic: true,
    exact: true,
  },
  {
    path: "/signUp/:id?",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/SignUp"))),
    ispublic: true,
    // exact: true,
  },
  {
    path: "/resetPassword",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/ResetPassword"))
    ),
    ispublic: true,
    exact: true,
  },
]
  .concat(superAdminRoutes)
  .concat(adminRoutes)
  .concat(userRoutes)
  .concat([
    {
      path: "/",
      component: () => {
        return <Redirect to="/login" />;
      },
      ispublic: true,
      exact: true,
    },
    {
      path: "/*",
      component: lazy(() =>
        fakeDelay(delayTime)(import("../Shared/ErrorPages"))
      ),
      role: allRoles,
    },
  ]);

export default routes;
