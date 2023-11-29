import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import {
  selectCurrentRole,
  selectCurrentToken,
} from "../features/auth/authSlice";

const AuthenticateDashboard = ({ children }: TReactNodeProps) => {
  const isExist = useSelector(selectCurrentToken);
  const role = useSelector(selectCurrentRole);

  return isExist ? (
    role == "admin" || role == "company" ? (
      <>
        {" "}
        <Suspense fallback={"Loading...."}>{children}</Suspense>
      </>
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/" />
  );
};

export default AuthenticateDashboard;
