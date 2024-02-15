import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { CheckCheck, Trash2, Eye } from "lucide-react";
import DefaultUser from "../../assets/user-default-profile.png";
import { useEffect, useState } from "react";
import { useApproveApplyMutation } from "../../features/company/put/approveApplyApiSlice";
import { useViewJobsQuery } from "../../features/company/get/viewJobsApiSlice";
import { useViewApplicantQuery } from "../../features/company/get/viewApplicantApiSlice";
import { useViewApplicantStatsQuery } from "../../features/company/get/viewApplicantStats";
import { Link } from "react-router-dom";
import { useDeleteApplicantMutation } from "../../features/company/delete/deleteApplicantApiSlice";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import Loader from "../../components/loader/Loader";
import { useToast } from "../../ui/use-toast";
import { Card } from "../../ui/card";
import EmptyData from "../../assets/recruit/empty.png"

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

const ApplicantsJobs = () => {
	const [title, setTitle] = useState("");
	const [approveApplication] = useApproveApplyMutation();
	const { toast } = useToast();

	const { data, isLoading, isSuccess } = useViewJobsQuery();

	const [skip, setSkip] = useState(true)
	const { data: result } = useViewApplicantQuery(title, { skip })
	const { data: stats } = useViewApplicantStatsQuery(title, { skip });
	const [deleteApplicant] = useDeleteApplicantMutation();

	const deleteApplicants = async (id: string, userId: string) => {
		try {
			await deleteApplicant({ id, userId }).unwrap();
			toast({
				description: "Applicant Removed"
			})
		} catch (error: any) {
			toast({
				variant: "destructive",
				description: error.message
			})
		}
	}


	const viewApplicants = (value: string) => {
		setTitle(value);
		setSkip(false);
	}




	const approve = async (id: string) => {
		try {
			await approveApplication(id).unwrap();
			toast({
				description: "Applicant Shortlisted"
			})
		} catch (error: any) {
			toast({
				variant: "destructive",
				description: error.message
			})
		}
	}
	useEffect(() => {
		if (data && data?.length > 0) {
			setTitle(data[0]._id);
		}
		if (title) {
			viewApplicants(title);
		}
	}, [data, isLoading, isSuccess, title]);

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
							<Select defaultValue={data.length > 0 ? data[0]._id : ""} onValueChange={viewApplicants}>
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
						<button>All: {stats?.all || 0}</button>
						<button>Approved: {stats?.approved || 0}</button>
						<button>Pending: {stats?.rejected || 0}</button>
					</div>
				</div>
				<div>
					{
						result && result.length === 0 || !result ? (<>
							<div className="items-center">
								<img src={EmptyData} className="h-[500px] m-auto" />
							</div>
						</>) : (<>
							{result && result.map((item: Result, index: number) => (
								<Card
									key={index}
									className="sm:flex items-center sm:justify-between p-4 mt-5 gap-2"
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
											<div className="lg:flex lg:items-center lg:gap-2">
												<p className="mt-1 lg:mt-2 text-sm text-slate-600 text-center md:text-left">{item?.userId?.email}</p>
												<p className="mt-1 lg:mt-2 text-sm text-slate-600 text-center md:text-left">{item?.userId?.phoneNo}</p>
												<p className="mt-1 lg:mt-2 text-sm text-slate-600 text-center md:text-left">Applied: 10 March 2022</p>
											</div>
										</div>
									</div>
									<div className="flex items-center gap-x-5 justify-center mt-2">
										<span className="bg-teal-100 px-3 py-2 rounded-lg cursor-pointer">
											<CheckCheck className="w-[20px] text-teal-600" onClick={() => approve(item?._id)} />
										</span>
										<span className="bg-orange-100 px-3 py-2 rounded-lg cursor-pointer">
											<Link to={`/dashboard/cv?userId=${item?.userId?._id}`}><Eye className="w-[20px] text-orange-600" /></Link>
										</span>
										<span className="bg-red-100 px-3 py-2 rounded-lg cursor-pointer">
											<Trash2 className="w-[20px] text-red-600" onClick={() => deleteApplicants(item?.jobId, item?.userId?._id)} />
										</span>
									</div>
								</Card>
							))}
						</>)
					}
					{/* {result && result.map((item: Result, index: number) => (
						<Card
							key={index}
							className="sm:flex items-center sm:justify-between p-4 mt-5 gap-2"
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
							<div className="flex items-center gap-x-5 justify-center mt-2">
								<span className="bg-teal-100 px-3 py-2 rounded-lg cursor-pointer">
									<CheckCheck className="w-[20px] text-teal-600" onClick={() => approve(item?._id)} />
								</span>
								<span className="bg-orange-100 px-3 py-2 rounded-lg cursor-pointer">
									<Link to={`/dashboard/cv?userId=${item?.userId?._id}`}><Eye className="w-[20px] text-orange-600" /></Link>
								</span>
								<span className="bg-red-100 px-3 py-2 rounded-lg cursor-pointer">
									<Trash2 className="w-[20px] text-red-600" onClick={() => deleteApplicants(item?.jobId, item?.userId?._id)} />
								</span>
							</div>
						</Card>
					))} */}
				</div>
			</div>
		</Container>
	);
};

export default ApplicantsJobs;
