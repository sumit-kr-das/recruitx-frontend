import TopHeader from "../components/navigation/TopHeader";
import RadixScrollArea from "../themes/RadixScrollArea";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<TopHeader />
			<div className="flex">
				<RadixScrollArea styles="pt-20 w-[300px] h-screen">
					<SideBar />
				</RadixScrollArea>
				<RadixScrollArea styles="pt-24 w-full h-screen bg-teal-50">
					<Outlet />
				</RadixScrollArea>
			</div>
		</>
	);
};

export default Layout;
