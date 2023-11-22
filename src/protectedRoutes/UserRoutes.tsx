import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import { selectCurrentRole } from "../features/auth/authSlice";

const UserRoutes = ({ children }: TReactNodeProps) => {
	const role = useSelector(selectCurrentRole);
	return role === "user" ? <> {children} </> : <Navigate to="/" />;
};

export default UserRoutes;