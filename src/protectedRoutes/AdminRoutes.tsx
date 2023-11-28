import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import { selectCurrentRole } from "../features/auth/authSlice";

const AdminRoutes = ({ children }: TReactNodeProps) => {
  const role = useSelector(selectCurrentRole);
  return role === "admin" ? <> {children} </> : <Navigate to="/" />;
};

export default AdminRoutes;
