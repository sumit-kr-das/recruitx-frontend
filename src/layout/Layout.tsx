import TopHeader from "../components/navigation/TopHeader";
import RadixScrollArea from "../themes/RadixScrollArea";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";

const Layout = () => {
	return (
		<>
			<TopHeader />
			<div className="flex">

				<ScrollArea className="pt-20 w-[300px] h-screen hidden lg:block">
					<SideBar />
				</ScrollArea>
				<ScrollArea className="pt-24 w-full h-screen bg-[#FAFAFA]">
					<Outlet />
				</ScrollArea>
			</div>
		</>
	);
};

export default Layout;
