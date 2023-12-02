import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import DefaultUser from "../../assets/user-default-profile.png";
import { useViewShortlistedApplicantsQuery } from "../../features/company/get/viewShortlistedApplicant";
import { useViewJobsQuery } from "../../features/company/get/viewJobsApiSlice";
import { useViewApplicantStatsQuery } from "../../features/company/get/viewApplicantStats";

import { useState } from "react";

const ShortlistedCandidates = () => {
	const [title, setTitle] = useState();
	const [skip, setSkip] = useState(true)
	const { data } = useViewJobsQuery();
	const { data: result } = useViewShortlistedApplicantsQuery(title, { skip })
	const { data: stats } = useViewApplicantStatsQuery(title, { skip });

	const viewApplicants = (e) => {
		setTitle(e.target.value);
		setSkip(false);
	}

	return (
		<Container>
			<TitleBar
				title="Shortlisted Candidates"
				path="Employer / Dashboard / Shortlisted Candidates"
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
							</select>
						</div>
					</div>
					<div className="flex items-center gap-x-5">
						<button>All: {stats?.all}</button>
						<button>Approved: {stats?.approved}</button>
						<button>Rejected: {stats?.rejected}</button>
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
									<div className="flex items-center gap-3">
										<p className="mt-2 text-sm text-slate-600">{item?.userId?.email}</p>
										<p className="mt-2 text-sm text-slate-600">{item?.userId?.phoneNo}</p>
										<p className="mt-2 text-sm text-slate-600">Applied: 10 March 2022</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default ShortlistedCandidates;
