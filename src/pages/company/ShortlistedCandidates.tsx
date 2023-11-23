import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { CheckCheck, Trash2, RotateCw, ArrowDownToLine } from "lucide-react";
import DefaultUser from "../../assets/user-default-profile.png";

const ShortlistedCandidates = () => {
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
											Kr. Dhananjay Preet
										</h2>
									</div>
									<div className="flex items-center">
										<p className="mt-2 text-sm text-slate-600">
											Sr. Web Designer .
										</p>
										<p className="mt-2 text-sm text-slate-600">Kalkata .</p>
										<p className="mt-2 text-sm text-slate-600">
											Applied: 10 March 2022
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center gap-x-5">
								<span className="bg-teal-100 px-3 py-2 rounded-lg cursor-pointer">
									<CheckCheck className="w-[20px] text-teal-600" />
								</span>
								<span className="bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
									<RotateCw className="w-[20px] text-blue-600" />
								</span>
								<span className="bg-orange-100 px-3 py-2 rounded-lg cursor-pointer">
									<ArrowDownToLine className="w-[20px] text-orange-600" />
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

export default ShortlistedCandidates;
