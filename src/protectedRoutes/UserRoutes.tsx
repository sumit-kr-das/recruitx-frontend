import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import {
  selectCurrentRole,
  selectCurrentStatus,
} from "../features/auth/authSlice";
import Loader from "../components/loader/Loader";

const UserRoutes = ({ children }: TReactNodeProps) => {
  const role = useSelector(selectCurrentRole);
  const isVarified = useSelector(selectCurrentStatus);

  return role === "user" ? (
    isVarified === "verified" ? (
      <>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </>
    ) : (
      <Navigate to="/verify-user" />
    )
  ) : (
    <Navigate to="/" />
  );
};

export default UserRoutes;
