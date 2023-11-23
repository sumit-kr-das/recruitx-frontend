import { jobRoles } from "../../../constants/jobRoles";
import { jobTypes } from "../../../constants/jobTypes";
import { skillData } from "../../../constants/skillData";
import { workPlaceTypes } from "../../../constants/workplaceTypes";
import MultiSelectInput from "../../form/multiSelectInput/MultiSelectInput";

const TechnicalInfo = () => {
	return (
		<div className="pb-12">
			<h2 className="text-base font-semibold leading-7 text-gray-900">
				Technical Information
			</h2>
			<p className="mt-1 text-sm leading-6 text-gray-600">
				Use a permanent address where you can receive mail.
			</p>

			<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
							{jobRoles.map((jobRole, index) => (
								<option key={index} value={jobRole}>
									{jobRole}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label
						htmlFor="first-name"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Minimum Experience
					</label>
					<div className="mt-2">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autoComplete="given-name"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label
						htmlFor="last-name"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Maximum Experience
					</label>
					<div className="mt-2">
						<input
							type="text"
							name="last-name"
							id="last-name"
							autoComplete="family-name"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label
						htmlFor="country"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Workplace type
					</label>
					<div className="mt-2">
						<select
							id="country"
							name="country"
							autoComplete="country-name"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						>
							<option>Select workplace type</option>
							{workPlaceTypes.map((workPlaceType, index) => (
								<option key={index} value={workPlaceType}>
									{workPlaceType}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label
						htmlFor="country"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Job type
					</label>
					<div className="mt-2">
						<select
							id="country"
							name="country"
							autoComplete="country-name"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						>
							<option>Select job type</option>
							{jobTypes.map((jobType, index) => (
								<option key={index} value={jobType}>
									{jobType}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="street-address"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Job location
					</label>
					<div className="mt-2">
						<input
							type="text"
							name="street-address"
							id="street-address"
							autoComplete="street-address"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-2 sm:col-start-1">
					<label
						htmlFor="city"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						No of vacancies
					</label>
					<div className="mt-2">
						<input
							type="text"
							name="city"
							id="city"
							autoComplete="address-level2"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<label
						htmlFor="region"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Min Salary
					</label>
					<div className="mt-2">
						<input
							type="text"
							name="region"
							id="region"
							autoComplete="address-level1"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<label
						htmlFor="postal-code"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Max Salary
					</label>
					<div className="mt-2">
						<input
							type="text"
							name="postal-code"
							id="postal-code"
							autoComplete="postal-code"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label
						htmlFor="country"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Highest qualificaion
					</label>
					<div className="mt-2">
						<select
							id="country"
							name="country"
							autoComplete="country-name"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						>
							<option>Select qualification</option>
							{jobTypes.map((jobType, index) => (
								<option key={index} value={jobType}>
									{jobType}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="sm:col-span-3">
					<label
						htmlFor="postal-code"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Degree title
					</label>
					<div className="mt-2">
						<input
							type="text"
							name="postal-code"
							id="postal-code"
							autoComplete="postal-code"
							placeholder="BE/B.Tech/M.trch/MCA"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<label
						htmlFor="postal-code"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Start date
					</label>
					<div className="mt-2">
						<input
							type="date"
							name="postal-code"
							id="postal-code"
							autoComplete="postal-code"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="sm:col-span-2">
					<label
						htmlFor="postal-code"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Expiry date
					</label>
					<div className="mt-2">
						<input
							type="date"
							name="postal-code"
							id="postal-code"
							autoComplete="postal-code"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="country"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Select skills
					</label>
					<div className="mt-2 w-full">
						<MultiSelectInput options={skillData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechnicalInfo;
