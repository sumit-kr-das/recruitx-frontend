import { Link } from "react-router-dom";
import UserDefault from "../assets/default-company-logo.png";
import { companyDashboard } from "../constants/companyDashboard";
import { useViewCompanyQuery } from "../features/company/viewCompanyApiSlice";

const SideBar = () => {
	const { data } = useViewCompanyQuery();
	console.log(data);

	return (
		<div className="pt-[15px] py-5">
			<div className="flex items-center justify-center flex-col">
				<img
					src={UserDefault}
					width={120}
					alt="user_default"
					className="rounded-full object-cover border mb-2"
				/>
				<h1 className="font-bold">{data && data[0]?.name}</h1>
				<p className="text-xs font-medium">{data && data[0]?.designation}</p>
				<p className="text-xs font-medium my-1">@ {data && data[0]?.companyName}</p>
				<p className="text-xs text-gray-400">{data && data[0]?.industry}</p>
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
	);
};

export default SideBar;
