import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyRoutes from "./protectedRoutes/CompanyRoutes";
import Layout from "./layout/Layout";
import {
	ApplicantsJobs,
	CompanyHome,
	CompanyLogin,
	CompanyRegister,
	HomePage,
	MyJobs,
	SubmitJobs,
	UserHomePage,
} from "./pages";
import SearchPage from "./pages/search/SearchPage";

const App = () => {
	return (
		<BrowserRouter>
			<Toaster position="bottom-right" reverseOrder={false} />
			<Routes>
				{/* default */}
				<Route path="/" element={<HomePage />} />
				{/* user */}
				<Route path="/userHome" element={<UserHomePage />} />
				<Route path="/search" element={<SearchPage />} />

				{/* company */}
				<Route path="/cRegister" element={<CompanyRegister />} />
				<Route path="/cLogin" element={<CompanyLogin />} />
				<Route
					path="recruit"
					element={
						<CompanyRoutes>
							<Layout />
						</CompanyRoutes>
					}
				>
					<Route path="/recruit" element={<CompanyHome />} />
					<Route path="/recruit/submit_jobs" element={<SubmitJobs />} />
					<Route path="/recruit/my_jobs" element={<MyJobs />} />
					<Route path="/recruit/applicants_jobs" element={<ApplicantsJobs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
