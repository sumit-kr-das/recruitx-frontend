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
		<> {children} </>
	) : role === "user" ? (
		<Navigate to="/userHome" />
	) : (
		<Navigate to="/dashboard" />
	);
};

export default AuthenticateRoutes;
