import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyRoutes from "./protectedRoutes/CompanyRoutes";
import Layout from "./layout/Layout";
import AuthenticateRoutes from "./protectedRoutes/AuthenticateRoutes";
import UserRoutes from "./protectedRoutes/UserRoutes";
import {
	ApplicantsJobs,
	CompanyLogin,
	CompanyRegister,
	HomePage,
	MyJobs,
	SubmitJobs,
	UserHomePage,
	ShortlistedCandidates,
	CompanyDashboard,
	Login,
	Register,
	CompanyProfile,
} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Toaster position="bottom-right" reverseOrder={false} />
			<Routes>
				{/* default */}
				<Route path="/" element={<HomePage />} />
				{/* user */}
				<Route
					path="/login"
					element={
						<AuthenticateRoutes>
							<Login />
						</AuthenticateRoutes>
					}
				/>
				<Route
					path="/register"
					element={
						<AuthenticateRoutes>
							<Register />
						</AuthenticateRoutes>
					}
				/>
				<Route
					path="/userHome"
					element={
						<UserRoutes>
							<UserHomePage />
						</UserRoutes>
					}
				/>
				{/* company */}
				<Route
					path="/cRegister"
					element={
						<AuthenticateRoutes>
							<CompanyRegister />
						</AuthenticateRoutes>
					}
				/>
				<Route
					path="/cLogin"
					element={
						<AuthenticateRoutes>
							<CompanyLogin />
						</AuthenticateRoutes>
					}
				/>
				<Route
					path="recruit"
					element={
						<CompanyRoutes>
							<Layout />
						</CompanyRoutes>
					}
				>
					<Route path="/recruit" element={<CompanyDashboard />} />
					<Route path="/recruit/company_profile" element={<CompanyProfile />} />
					<Route path="/recruit/submit_jobs" element={<SubmitJobs />} />
					<Route path="/recruit/my_jobs" element={<MyJobs />} />
					<Route path="/recruit/applicants_jobs" element={<ApplicantsJobs />} />
					<Route
						path="/recruit/shortlisted_candidates"
						element={<ShortlistedCandidates />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
