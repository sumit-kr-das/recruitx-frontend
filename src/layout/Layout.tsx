import SideBar from "./SideBar";

const Layout = () => {
	return (
		<div className="flex bg-realblue">
			<div className="w-[300px]">
				<SideBar />
			</div>
			<div className="w-full overflow-x-hidden px-8 pb-4">
				<div>Hello World</div>
			</div>
		</div>
	);
};

export default Layout;
