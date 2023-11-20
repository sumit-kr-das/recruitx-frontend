import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, UserHomePage, CompanyHome } from "./pages";
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
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
