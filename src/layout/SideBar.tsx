import { Link } from "react-router-dom";
import UserDefault from "../assets/default-company-logo.png";
import { companyDashboard } from "../constants/companyDashboard";
import RadixScrollArea from "../themes/RadixScrollArea";

const SideBar = () => {
	return (
		<RadixScrollArea styles="pt-20 w-[300px] h-screen">
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
		</RadixScrollArea>
	);
};

export default SideBar;
