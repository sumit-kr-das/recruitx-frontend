import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import Loader from "../components/loader/Loader";
import {
    selectCurrentRole
} from "../features/auth/authSlice";

const VerifyUserRoutes = ({ children }: TReactNodeProps) => {
  const role = useSelector(selectCurrentRole);

  return role ? (
    <>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default VerifyUserRoutes;
