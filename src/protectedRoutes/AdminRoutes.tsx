import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import { selectCurrentRole } from "../features/auth/authSlice";
import Loader from "../components/loader/Loader";

const AdminRoutes = ({ children }: TReactNodeProps) => {
  const role = useSelector(selectCurrentRole);
  return role === "admin" ? (
    <> {<Suspense fallback={<Loader />}>{children}</Suspense>} </>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoutes;
