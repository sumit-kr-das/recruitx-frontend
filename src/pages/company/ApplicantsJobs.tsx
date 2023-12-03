import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { CheckCheck, Trash2, RotateCw, ArrowDownToLine } from "lucide-react";
import DefaultUser from "../../assets/user-default-profile.png";
import { useState } from "react";
import { useApproveApplyMutation } from "../../features/company/put/approveApplyApiSlice";

import { useViewJobsQuery } from "../../features/company/get/viewJobsApiSlice";
import { useViewApplicantQuery } from "../../features/company/get/viewApplicantApiSlice";
import toast from "react-hot-toast";
import { useViewApplicantStatsQuery } from "../../features/company/get/viewApplicantStats";
import { Link } from "react-router-dom";

// import { skipToken } from "@reduxjs/toolkit/query";

const ApplicantsJobs = () => {
	const [title, setTitle] = useState();
	const [approveApplication] = useApproveApplyMutation();

	const { data, isSuccess } = useViewJobsQuery();
	const [skip, setSkip] = useState(true)
	// const [myState, setState] = useState(skipToken) // initialize with skipToken to skip at first
	const { data: result } = useViewApplicantQuery(title, { skip })
	const { data: stats } = useViewApplicantStatsQuery(title, { skip });



	// if (title) {
	// 	setSkip(false);
	// 	console.log(result, "data");

	// }

	const viewApplicants = (e) => {
		setTitle(e.target.value);
		setSkip(false);
	}

	const approve = async (id: string) => {
		try {
			console.log(id);
			await approveApplication(id).unwrap();
			toast.success('Application Shortlisted')
		} catch (error) {
			console.log(error);
		}
	}



	return (
		<Container>
			<TitleBar
				title="Manage Applicants"
				path="Employer / Dashboard / All Applicants"
			/>
			<div>
				<div className="flex justify-between gap-x-5">
					<div className="sm:col-span-4">
						<label
							htmlFor="country"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Job role
						</label>
						<div className="mt-2">
							<select
								id="country"
								name="country"
								value={title}
								autoComplete="country-name"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								onChange={viewApplicants}
							>
								<option>Select role</option>
								{
									data?.map((item, index) => (
										<option value={item?._id} key={index}>{item?.title}</option>
									))
								}
								{/* <option>Software Developer (120)</option>
								<option>Software Tester (50)</option> */}
							</select>
						</div>
					</div>
					<div className="flex items-center gap-x-5">
						<button>All: {stats?.all}</button>
						<button>Approved: {stats?.approved}</button>
						<button>Pending: {stats?.rejected}</button>
					</div>
				</div>
				<div>
					{result && result.map((item, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 mt-5 rounded-lg border bg-white gap-2"
						>
							<div className="flex items-center gap-5">
								<img
									className="w-[80px] h-[80px] rounded-full"
									src={DefaultUser}
									alt="user"
								/>
								<div>
									<div>
										<h2 className="font-bold text-slate-600 text-lg">
											{item?.userId?.name}
										</h2>
									</div>
									<div className="flex items-center gap-2">
										<p className="mt-2 text-sm text-slate-600">{item?.userId?.email}</p>
										<p className="mt-2 text-sm text-slate-600">{item?.userId?.phoneNo}</p>
										<p className="mt-2 text-sm text-slate-600">Applied: 10 March 2022</p>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-x-5">
								<span className="bg-teal-100 px-3 py-2 rounded-lg cursor-pointer">
									<CheckCheck className="w-[20px] text-teal-600" onClick={() => approve(item?._id)} />
								</span>
								<span className="bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
									<RotateCw className="w-[20px] text-blue-600" />
								</span>
								<span className="bg-orange-100 px-3 py-2 rounded-lg cursor-pointer">
									<Link to={`/dashboard/cv?userId=${item?.userId?._id}`}><ArrowDownToLine className="w-[20px] text-orange-600" /></Link>
								</span>
								<span className="bg-red-100 px-3 py-2 rounded-lg cursor-pointer">
									<Trash2 className="w-[20px] text-red-600" />
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default ApplicantsJobs;
