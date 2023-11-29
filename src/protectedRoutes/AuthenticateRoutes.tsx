import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import {
  selectCurrentRole,
  selectCurrentToken,
} from "../features/auth/authSlice";

const AuthenticateRoutes = ({ children }: TReactNodeProps) => {
  const isExist = useSelector(selectCurrentToken);
  const role = useSelector(selectCurrentRole);
  return !isExist ? (
    <>
      {" "}
      <Suspense fallback={"Loading...."}>{children}</Suspense>{" "}
    </>
  ) : role === "user" ? (
    <Navigate to="/mnjuser/home" />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default AuthenticateRoutes;
