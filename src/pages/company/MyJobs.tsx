import { toast } from "react-hot-toast";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { useDeleteJobMutation } from "../../features/company/deleteJobApiSlice";
import { useViewJobsQuery } from "../../features/company/viewJobsApiSlice";
import { useGetJobStaticsQuery } from "../../features/statics/getJobStaticsApiSlice";
import Container from "../../layout/Container";
import { Pencil, Trash2 } from "lucide-react";

export const convertDate = (srcDate: string) => {
	const startDate = new Date(srcDate);
	const options: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "short",
		year: "numeric",
	};
	return startDate.toLocaleDateString("en-GB", options);
};

const JobsStat = () => {
	const { data, isSuccess } = useGetJobStaticsQuery();

	const jobsStat = (
		<div className="flex items-center gap-x-5">
			<button>All: {data?.all}</button>
			<button>Active: {data?.active}</button>
			<button>Expired: {data?.expired}</button>
		</div>
	);

	return isSuccess ? jobsStat : <p>Error in Job</p>;
};

const MyJobs = () => {
	const { data, isSuccess } = useViewJobsQuery();
	const [deleteJob] = useDeleteJobMutation();

	const handleDelete = async (id) => {
		console.log(id);
		try {
			await deleteJob(id).unwrap();
			toast.success("Job deleted successfully");
		} catch (err: any) {
			toast.error(err.data.message);
			console.log("Error on company register", err);
		}
	};
	const myJobs = (
		<Container>
			<TitleBar title="Manage jobs" path="Employer / Dashboard / My Jobs" />
			<div>
				<JobsStat />
				<div>
					{data?.map((job, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 mt-5 rounded-lg border bg-white gap-2"
						>
							<div>
								<h2 className="font-bold text-slate-600 text-lg">
									{job?.title}
								</h2>
								<p className="mt-2 text-sm">{job?.info.roles}</p>
							</div>
							<div>
								<p className="text-white text-sm bg-blue-600 px-2 py-1 rounded-md">
									{index} Applicants
								</p>
							</div>
							<div>
								<p className="text-sm text-teal-600">
									<span className="text-slate-500">Posted: </span>
									{convertDate(job?.info.startDate)}
								</p>
								<p className="text-sm mt-2 text-red-600">
									<span className="text-slate-500">Expired: </span>
									{convertDate(job?.info.endDate)}
								</p>
							</div>
							<div className="flex items-center gap-x-5">
								{/* <span className="bg-teal-100 px-3 py-2 rounded-lg cursor-pointer">
									<Pencil className="w-[20px] text-teal-600" />
								</span> */}
								<span
									onClick={() => handleDelete(job?._id)}
									className="bg-red-100 px-3 py-2 rounded-lg cursor-pointer"
								>
									<Trash2 className="w-[20px] text-red-600" />
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);

	return isSuccess ? myJobs : <p>Error in Job</p>;
};

export default MyJobs;
