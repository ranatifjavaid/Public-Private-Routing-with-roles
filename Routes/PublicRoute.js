import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import getIntialURL from "../Shared/HelperMethods/getInitialURL";

export function PublicRoute({ Component, props }) {
  const userDetail = useSelector((state) => state.Auth);
  if (userDetail.token) {
    const roleId = userDetail.user.RoleId;
    return (
      <Redirect
        to={getIntialURL(roleId).replace("/:tenantId", userDetail.tenantId)}
      />
    );
  } else {
    return <Component {...props} />;
  }
}
