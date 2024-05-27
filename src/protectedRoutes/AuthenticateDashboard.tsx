import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import {
  selectCurrentRole,
  selectCurrentToken,
} from "../features/auth/authSlice";
import Loader from "../components/loader/Loader";

const AuthenticateDashboard = ({ children }: TReactNodeProps) => {
  const isExist = useSelector(selectCurrentToken);
  const role = useSelector(selectCurrentRole);
  console.log("dashboard")

  return isExist ? (
    role == "admin" || role == "company" ? (
      <>
        {" "}
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </>
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/" />
  );
};

export default AuthenticateDashboard;
