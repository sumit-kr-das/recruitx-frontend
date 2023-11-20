import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { CheckCheck, Trash2, RotateCw, ArrowDownToLine } from "lucide-react";
import DefaultUser from "../../assets/user-default-profile.png";

const ApplicantsJobs = () => {
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
								autoComplete="country-name"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
							>
								<option>Select role</option>
								<option>Software Developer (120)</option>
								<option>Software Tester (50)</option>
							</select>
						</div>
					</div>
					<div className="flex items-center gap-x-5">
						<button>All: 122</button>
						<button>Approved: 24</button>
						<button>Rejected: 57</button>
					</div>
				</div>
				<div>
					{[...Array(5)].map((_, index) => (
						<div
							key={index}
							className="flex items-center justify-between p-4 mt-5 rounded-lg border bg-cyan-100 gap-2"
						>
							<div className="flex items-center gap-5">
								<img
									className="w-[80px] h-[80px] rounded-full"
									src={DefaultUser}
									alt="user"
								/>
								<div>
									<div>
										<h2 className="text-lg font-semibold">
											Kr. Dhananjay Preet
										</h2>
									</div>
									<div className="flex items-center">
										<p className="text-sm text-slate-500">Sr. Web Designer .</p>
										<p className="text-sm text-slate-500">Kalkata .</p>
										<p className="text-sm text-slate-500">
											Applied: 10 March 2022
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-x-5">
								<CheckCheck />
								<RotateCw />
								<ArrowDownToLine />
								<Trash2 />
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default ApplicantsJobs;
