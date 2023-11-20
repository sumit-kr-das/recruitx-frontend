import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, UserHomePage, CompanyHome,SubmitJobs, MyJobs } from "./pages";
import TopHeader from "./components/navigation/TopHeader";
import Layout from "./layout/Layout";

const App = () => {
	return (
		<BrowserRouter>
			<TopHeader />
			<Routes>
				{/* default */}
				<Route path="/" element={<HomePage />} />
				{/* user */}
				<Route path="/userHome" element={<UserHomePage />} />
				{/* company */}
				<Route path="recruit" element={<Layout />}>
					<Route path="/recruit" element={<CompanyHome />} />
					<Route path="/recruit/submit_jobs" element={<SubmitJobs />} />
					<Route path="/recruit/my_jobs" element={<MyJobs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
