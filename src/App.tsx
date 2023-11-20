import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, UserHomePage } from "./pages";
import TopHeader from "./components/navigation/TopHeader";
import Layout from "./layout/Layout";

const App = () => {
	return (
		<BrowserRouter>
			<TopHeader />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/userHome" element={<UserHomePage />} />
				<Route path="/recruit" element={<Layout />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
