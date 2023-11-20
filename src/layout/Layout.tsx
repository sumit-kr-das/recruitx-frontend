import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="flex bg-realblue">
			<div className="w-[300px]">
				<SideBar />
			</div>
			<div className="w-full overflow-x-hidden px-8 pb-4">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
