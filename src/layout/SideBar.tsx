import UserDefault from "../assets/default-company-logo.png";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { companyDashboard } from "../constants/companyDashboard";
import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<ScrollArea.Root className="pt-20 w-[300px] h-screen rounded overflow-hidden bg-white">
			<ScrollArea.Viewport className="w-full h-full rounded">
				<div className="pt-[15px] py-5">
					<div className="flex items-center justify-center flex-col">
						<img
							src={UserDefault}
							width={120}
							alt="user_default"
							className="rounded-full object-cover border mb-2"
						/>
						<h1 className="font-bold">Sumit Kumar Das</h1>
						<p className="text-xs font-medium">CEO, Coflunder</p>
						<p className="text-xs font-medium my-1">@ designx.digital</p>
						<p className="text-xs text-gray-400">Last updated 29d ago</p>
					</div>
					<h3 className="mt-10 mb-4 px-5 font-medium text-bold text-md">
						Main Navigation
					</h3>
					{companyDashboard.map((item, index) => (
						<Link
							to={item.src}
							className="block px-5 text-slate-500 text-[13px] leading-[18px] px-full py-4 cursor-pointer border-l-4 border-white hover:text-cyan-600 hover:border-l-cyan-400 hover:bg-green-100"
							key={index}
						>
							{item.menu}
						</Link>
					))}
				</div>
			</ScrollArea.Viewport>

			<ScrollArea.Scrollbar
				className="flex select-none touch-none p-0.5 bg-cyan-100 transition-colors duration-[160ms] ease-out hover:bg-cyan-500 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
				orientation="vertical"
			>
				<ScrollArea.Thumb className="flex-1 bg-cyan-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
			</ScrollArea.Scrollbar>
			<ScrollArea.Scrollbar
				className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
				orientation="horizontal"
			>
				<ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner className="bg-blackA5" />
		</ScrollArea.Root>
	);
};

export default SideBar;
