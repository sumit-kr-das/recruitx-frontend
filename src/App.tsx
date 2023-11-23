import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, UserHomePage, SearchPage } from "./pages";
import TopHeader from "./components/navigation/TopHeader";


const App = () => {
	return (
		<BrowserRouter>
			<TopHeader />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/userHome" element={<UserHomePage />} />
				<Route path="/search" element={<SearchPage />} />

			</Routes>
		</BrowserRouter>
	);
};

export default App;
