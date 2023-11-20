import React from "react";
import { Link } from "react-router-dom";
import UserDefault from "../../assets/user-default-profile.png";
import InfoSVG from "../../assets/icons/info.svg";
import HomeSVG from "../../assets/icons/home.svg";
import BlogSVG from "../../assets/icons/blog.svg";
import CompanyeSVG from "../../assets/icons/company.svg";
import JobsSVG from "../../assets/icons/jobs.svg";

const UserProfile = () => {
	return (
		<div className="p-4 text-center">
			{/* user profile section */}
			<div className="flex items-center justify-center flex-col">
				<img
					src={UserDefault}
					width={120}
					alt="user_default"
					className="rounded-full object-cover border"
				/>
				<h1 className="font-bold">Sumit Kumar Das</h1>
				<p className="text-xs font-medium">MERN Full Stack Developer</p>
				<p className="text-xs font-medium my-1">@ designx.digital</p>
				<p className="text-xs text-gray-400">Last updated 29d ago</p>
				<button className="mt-2 bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600">
					View profile
				</button>
			</div>
			{/* profile performence section */}
			<div className="bg-slate-100 mt-4 rounded-xl p-2">
				<div className="flex items-center justify-center gap-1">
					<p className="font-bold text-sm">Profile performance</p>
					<img
						src={InfoSVG}
						width={15}
						alt="main logo"
						className="rounded-full object-cover cursor-pointer"
					/>
				</div>
				<div className="flex items-center mt-2">
					<div className="flex-1">
						<p className="text-xs font-medium">Search appearances</p>
						<p className="font-bold text-blue-600 mt-1">10</p>
					</div>
					<div className="flex-1">
						<p className="text-xs font-medium">Recruiter actions</p>
						<p className="font-bold text-blue-600 mt-1">14</p>
					</div>
				</div>
			</div>
			{/* home navigation section */}
			<div className="mt-4">
				<ul>
					<li>
						<Link
							to="/home"
							className="flex gap-1 py-2 px-4 rounded-lg hover:bg-green-100"
						>
							<img src={HomeSVG} width={20} alt="nav_logo" />
							<p>My Home</p>
						</Link>
					</li>
					<li>
						<Link
							to="/home"
							className="flex gap-1 py-2 px-4 rounded-lg hover:bg-green-100"
						>
							<img src={JobsSVG} width={20} alt="nav_logo" />
							<p>Jobs</p>
						</Link>
					</li>
					<li>
						<Link
							to="/home"
							className="flex gap-1 py-2 px-4 rounded-lg hover:bg-green-100"
						>
							<img src={CompanyeSVG} width={20} alt="nav_logo" />
							<p>Companies</p>
						</Link>
					</li>
					<li>
						<Link
							to="/home"
							className="flex gap-1 py-2 px-4 rounded-lg hover:bg-green-100"
						>
							<img src={BlogSVG} width={20} alt="nav_logo" />
							<p>Blogs</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default UserProfile;