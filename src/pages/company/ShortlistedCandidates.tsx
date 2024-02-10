import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import DefaultUser from "../../assets/user-default-profile.png";
import { useViewShortlistedApplicantsQuery } from "../../features/company/get/viewShortlistedApplicant";
import { useViewJobsQuery } from "../../features/company/get/viewJobsApiSlice";
import { useViewApplicantStatsQuery } from "../../features/company/get/viewApplicantStats";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Card } from "../../ui/card";

type Result = {
	_id: string,
	jobId: string,
	userId: {
		_id: string,
		name: string,
		email: string,
		phoneNo: string,
	}
	selected: boolean
}

const ShortlistedCandidates = () => {
	const [title, setTitle] = useState("");
	const [skip, setSkip] = useState(true)
	const { data, isLoading } = useViewJobsQuery();
	const { data: result } = useViewShortlistedApplicantsQuery(title, { skip })
	const { data: stats } = useViewApplicantStatsQuery(title, { skip });

	const viewApplicants = (value: string) => {
		setTitle(value);
		setSkip(false);
	}

	if (isLoading || !data) return (<Loader />)

	return (
		<Container>
			<TitleBar
				title="Manage Applicants"
				path="Employer / Dashboard / All Applicants"
			/>
			<div>
				<div className="sm:flex justify-between gap-x-5">
					<div className="flex items-center sm:block sm:col-span-4">
						<label
							htmlFor="country"
							className="block text-md sm:text-sm font-medium leading-6 text-gray-900 mr-3 sm:mr-0 "
						>
							Job role
						</label>
						<div className="mt-2">
							<Select defaultValue={title} onValueChange={viewApplicants}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select a Job" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{
											data?.map((item, index) => (
												<SelectItem value={item?._id} key={index}>{item?.title}</SelectItem>

											))
										}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex items-center gap-x-5 justify-center mt-4 sm:mt-0">
						<button>All: {stats?.all}</button>
						<button>Approved: {stats?.approved}</button>
						<button>Pending: {stats?.rejected}</button>
					</div>
				</div>
				<div>
					{result && result.map((item: Result, index: number) => (
						<Card
							key={index}
							className="sm:flex items-center sm:justify-between p-4 mt-5  gap-2"
						>
							<div className="sm:flex sm:items-center sm:gap-5">
								<img
									className="w-[80px] h-[80px] rounded-full m-auto"
									src={DefaultUser}
									alt="user"
								/>
								<div>
									<div>
										<h2 className="font-bold text-slate-600 text-lg text-center sm:text-left">
											{item?.userId?.name}
										</h2>
									</div>
									<div className="sm:flex sm:items-center sm:gap-2">
										<p className="mt-1 sm:mt-2 text-sm text-slate-600 text-center">{item?.userId?.email}</p>
										<p className="mt-1 sm:mt-2 text-sm text-slate-600 text-center">{item?.userId?.phoneNo}</p>
										<p className="mt-1 sm:mt-2 text-sm text-slate-600 text-center">Applied: 10 March 2022</p>
									</div>
								</div>
							</div>
							<div className="flex justify-center mt-2">
								<span className="bg-orange-100 px-3 py-2 rounded-lg cursor-pointer">
									<Link to={`/dashboard/cv?userId=${item?.userId?._id}`}><Eye className="w-[20px] text-orange-600" /></Link>
								</span>
							</div>
						</Card>
					))}
				</div>
			</div>
		</Container>
	);
};

export default ShortlistedCandidates;
