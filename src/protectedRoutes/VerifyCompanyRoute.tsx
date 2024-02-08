import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TReactNodeProps } from "../@types/TReactNodeProps";
import Loader from "../components/loader/Loader";
import {
    selectCurrentStatus
} from "../features/auth/authSlice";

const VerifyCompanyRoute = ({ children }: TReactNodeProps) => {
    const status = useSelector(selectCurrentStatus);

    return status === "approved" ? (
        <>
            <Suspense fallback={<Loader />}>{children}</Suspense>
        </>
    ) : (
        <Navigate to="/dashboard/company_profile" />
    );
}

export default VerifyCompanyRoute