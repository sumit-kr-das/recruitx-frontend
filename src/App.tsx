import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	HomePage,
	UserHomePage,
	CompanyHome,
	SubmitJobs,
	MyJobs,
	ApplicantsJobs,
	CompanyRegister,
	CompanyLogin,
} from "./pages";
import TopHeader from "./components/navigation/TopHeader";
import Layout from "./layout/Layout";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import CompanyRoutes from "./protectedRoutes/CompanyRoutes";

const App = () => {
	return (
		<BrowserRouter>
			<Toaster position="bottom-right" reverseOrder={false} />
			<TopHeader />
			<Routes>
				{/* default */}
				<Route path="/" element={<HomePage />} />
				{/* user */}
				<Route path="/userHome" element={<UserHomePage />} />
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
			<Footer />
		</BrowserRouter>
	);
};

export default App;
