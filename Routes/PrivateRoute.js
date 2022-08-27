import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import getIntialURL from "../Shared/HelperMethods/getInitialURL";

export function PrivateRoute({ Component, role, props }) {
  const userDetail = useSelector((state) => state.Auth);
  if (userDetail.token) {
    const roleId = userDetail.user.RoleId;
    if (role.indexOf(roleId) > -1) {
      return <Component {...props} />;
    } else {
      return (
        <Redirect
          to={getIntialURL(roleId).replace("/:tenantId", userDetail.tenantId)}
        />
      );
    }
  } else {
    return <Redirect to="/login" />;
  }
}
