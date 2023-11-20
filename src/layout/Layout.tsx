import RadixScrollArea from "../themes/RadixScrollArea";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex bg-red-400">
			<RadixScrollArea styles="pt-20 w-[300px] h-screen">
				<SideBar />
			</RadixScrollArea>
			<RadixScrollArea styles="w-full h-screen">
				<Outlet />
			</RadixScrollArea>
		</div>
	);
};

export default Layout;
