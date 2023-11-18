import React from "react";
import { Link } from "react-router-dom";
import JobSlider from "./JobSlider";
import JobsSlider from "./JobsSlider";
import CompanySlider from "./CompanySlider";
/* Images */
import QRCode from "../../assets/qrcode.png";
import RocketIMG from "../../assets/icons/leftImg.png";
import RocketImg from "../../assets/icons/ear-section.png";

const HomeFeed = () => {
	return (
		<div className="mx-4">
			{/* early access section */}
			<div className="p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-2">
				<img src={RocketIMG} width={100} alt="rocket_default" />
				<div>
					<p className="text-white font-bold text-sm">
						Early access roles, only on RecruitX app!
					</p>
					<p className="text-white text-xs mt-1">
						Early access roles, only on RecruitX app! Fresh opportunities based
						on the profiles recruiters are actively searching for even before
						they post a job on RecruitX
					</p>
				</div>
				<img
					src={QRCode}
					width={100}
					alt="qrcode_default"
					className="bg-white p-1 rounded-md"
				/>
			</div>
			{/* job recomandation section */}
			<div className="bg-white border rounded-lg mt-4 shadow-md">
				<div className="flex justify-between p-6">
					<p className="font-bold">55 Recommended jobs</p>
					<Link to="/" className="text-blue-600 font-semibold">
						View all
					</Link>
				</div>
				<div className="w-[600px]">
					<JobSlider />
				</div>
			</div>
			{/* early access roles section */}
			<div className="bg-white border rounded-lg mt-4 shadow-md">
				<div className="flex justify-between p-6">
					<div className="flex gap-2">
						<img src={RocketImg} width={40} height={40} alt="rocket_default" />
						<div>
							<p className="font-bold">
								75 Early access roles from top companies
							</p>
							<p className="text-xs">
								See what recruiters are searching for, even before they post a
								job
							</p>
						</div>
					</div>
					<Link to="/" className="text-blue-600 font-semibold">
						View all
					</Link>
				</div>
				<div className="w-[600px]">
					<JobsSlider />
				</div>
			</div>
			{/* top companies section */}
			<div className="bg-white border rounded-lg mt-4 shadow-md">
				<div className="flex justify-between p-6">
					<div>
						<p className="font-bold">Top companies</p>
						<p className="text-xs">Hiring for Software Development</p>
					</div>
					<Link to="/" className="text-blue-600 font-semibold">
						View all
					</Link>
				</div>
				<div className="w-[600px]">
					<CompanySlider />
				</div>
			</div>
		</div>
	);
};

export default HomeFeed;
