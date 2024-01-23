import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import {
  selectCurrentRole,
  selectCurrentStatus,
  selectCurrentToken,
} from "../features/auth/authSlice";
import Loader from "../components/loader/Loader";

const AuthenticateRoutes = ({ children }: TReactNodeProps) => {
  const isExist = useSelector(selectCurrentToken);
  const isVarified = useSelector(selectCurrentStatus);
  const role = useSelector(selectCurrentRole);
  return !isExist ? (
    <>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  ) : role === "user" ? ( isVarified === "verified" ? <Navigate to="/verify-user" /> :
    <Navigate to="/mnjuser/home" />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default AuthenticateRoutes;
