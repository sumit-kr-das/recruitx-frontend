import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import { selectCurrentToken } from "../features/auth/authSlice";

const AuthenticateRoutes = ({ children }: TReactNodeProps) => {
	const isExist = useSelector(selectCurrentToken);
	return !isExist ? <> {children} </> : <Navigate to="/" />;
};

export default AuthenticateRoutes;
