import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, UserHomePage } from "./pages";
import TopHeader from "./components/navigation/TopHeader";

const App = () => {
	return (
		<BrowserRouter>
			<TopHeader />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/userHome" element={<UserHomePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
