
import {
    MdDescription,
    MdLocationOn,
    MdOutlineAttachMoney,
    MdOutlineWork,
} from "react-icons/md";

import { convertDate } from "../../../pages/company/MyJobs";
import { useNavigate } from "react-router-dom";
import countDays from "../../customFunctions/countDays";


const AppliedJob = ({ job }) => {
    const navigate = useNavigate();
    const navigateDetailsPage = (id: string) => {
        navigate(`/jobDetails/${id}`)
    }
    return (
        <>
            <div
                className="bg-white p-8 mb-4 border rounded-lg transition ease-in delay-75 cursor-pointer hover:shadow-lg"
                onClick={() => navigateDetailsPage(job?.jobId?._id)}
            >
                <div>
                    <h2 className="font-semibold text-xl">{job?.jobId?.title}</h2>
                    <p className="font-semibold">{job?.jobId?.info.company}</p>
                </div>
                <div className="flex items-center mt-2">
                    <div className="flex items-center gap-1">
                        <MdOutlineWork className="text-slate-400" />
                        <p className="text-sm font-semibold text-slate-400">{job?.jobId?.info.minExprience} Yrs - {job?.jobId?.info.maxExprience}</p>
                    </div>
                    <p className="mx-2 text-sm font-semibold text-gray-300">&#124;</p>
                    <div className="flex items-center gap-1">
                        <MdOutlineAttachMoney className="text-slate-400" />
                        <p className="text-sm font-semibold text-slate-400">
                            {job?.jobId?.info.maxSalary} Lacs PA
                        </p>
                    </div>
                    <p className="mx-2 text-sm font-semibold text-gray-300">&#124;</p>
                    <div className="flex items-center gap-1">
                        <MdLocationOn className="text-slate-400" />
                        <p className="text-sm font-semibold text-slate-400">{job?.jobId?.info.type}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <MdDescription className="text-2xl" />
                    <p className="text-sm my-1 truncate">
                        {job?.jobId?.description}
                    </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap my-2">
                    {/* <Image src={StarSVG} width={10} alt="star" /> */}
                    {
                        job?.jobId?.info.skills.map((skill, sIndex) => (
                            <p key={sIndex} className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 capitalize">
                                {skill}
                            </p>
                        ))
                    }
                </div>
                <div className="mt-3">
                    <p className="font-bold text-blue-600 mt-1">Status : {
                        job?.isSelected ? (
                            <>
                                Short Listed
                            </>
                        ) : (
                            <>
                                pending
                            </>
                        )
                    }</p>
                </div>
                <div className="flex items-center gap-1 mt-2">

                    <p className="text-sm">Applied {countDays(job?.jobId?.info.startDate)}</p>
                </div>
            </div>
        </>
    )
}

export default AppliedJob