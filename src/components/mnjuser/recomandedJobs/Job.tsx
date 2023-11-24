
import {
	MdDescription,
	MdLocationOn,
	MdOutlineAttachMoney,
	MdOutlineWork,
} from "react-icons/md";

import { convertDate } from "../../../pages/company/MyJobs";


const Job = ({jobs}) => {
    console.log(jobs);
	return (
		<>
			{jobs?.map((item, index) => (
				<div
					key={index}
					className="bg-white p-8 mb-4 border rounded-lg transition ease-in delay-75 cursor-pointer hover:shadow-lg"
				>
					<div>
						<h2 className="font-semibold text-xl">{item?.title}</h2>
						<p className="font-semibold">{item?.info.company}</p>
					</div>
					<div className="flex items-center mt-2">
						<div className="flex items-center gap-1">
							<MdOutlineWork className="text-slate-400" />
							<p className="text-sm font-semibold text-slate-400">{item?.info.minExprience} Yrs - {item?.info.maxExprience}</p>
						</div>
						<p className="mx-2 text-sm font-semibold text-gray-300">&#124;</p>
						<div className="flex items-center gap-1">
							<MdOutlineAttachMoney className="text-slate-400" />
							<p className="text-sm font-semibold text-slate-400">
							{item?.info.maxSalary} Lacs PA
							</p>
						</div>
						<p className="mx-2 text-sm font-semibold text-gray-300">&#124;</p>
						<div className="flex items-center gap-1">
							<MdLocationOn className="text-slate-400" />
							<p className="text-sm font-semibold text-slate-400">{item?.info.type}</p>
						</div>
					</div>
					<div className="flex items-center gap-1">
						<MdDescription className="text-2xl" />
						<p className="text-sm my-1 truncate">
						{item.description}
						</p>
					</div>
					<div className="flex items-center gap-1">
						{/* <Image src={StarSVG} width={10} alt="star" /> */}
						<p className="text-sm text-gray-400">
                            {
                                item?.info.skills.map((skill)=>(
                                    <>
                                    {skill} &#183;
                                    </>
                                ))
                            }
							{/* User &#183; Interface &#183; DesigningFront &#183; End &#183;
							DesignFront &#183; endUX &#183; DesignFrontUXUI */}
						</p>
					</div>
					<div className="flex items-center gap-1 mt-2">

						<p className="text-sm">{convertDate(item?.info.startDate)}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default Job;