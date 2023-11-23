import { jobRoles } from "../../../constants/jobRoles";
import { jobTypes } from "../../../constants/jobTypes";
import { skillData } from "../../../constants/skillData";
import { workPlaceTypes } from "../../../constants/workplaceTypes";
import SelectInput from "../../form/multiSelectInput/SelectInput";
import MultiSelectInput from "../../form/multiSelectInput/MultiSelectInput";
import { useState } from "react";
type TUserData = {
	vacancies: string;
	jobType: string;
	workplaceType: string;
	startDate: string;
	endDate: string;
	roles: string;
	skills: string[];
	minExprience: string;
	maxExprience?: string;
	minSalary?: string;
	maxSalary?: string;
	location?: string;
	maxQualification: string;
	degree: string;
};

type TUserFormProps = TUserData & {
	updateFields: (fields: Partial<TUserData>) => void;
};

const TechnicalInfo = ({
	vacancies,
	jobType,
	workplaceType,
	startDate,
	endDate,
	roles,
	skills,
	minExprience,
	maxExprience,
	minSalary,
	maxSalary,
	location,
	maxQualification,
	degree,
	updateFields,
}: TUserFormProps) => {
	const [value, setValue] = useState([skillData[0]]);

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
							value={roles}
							onChange={(e) => updateFields({ roles: e.target.value })}
							id="roles"
							name="roles"
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
							value={maxExprience}
							onChange={(e) => updateFields({ maxExprience: e.target.value })}
							type="text"
							name="minExprience"
							id="minExprience"
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
							value={minExprience}
							onChange={(e) => updateFields({ minExprience: e.target.value })}
							type="text"
							name="minExprience"
							id="minExprience"
							autoComplete="minExprience"
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
							value={workplaceType}
							onChange={(e) => updateFields({ workplaceType: e.target.value })}
							id="workplaceType"
							name="workplaceType"
							autoComplete="workplaceType"
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
							value={jobType}
							onChange={(e) => updateFields({ jobType: e.target.value })}
							id="jobType"
							name="jobType"
							autoComplete="jobType"
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
							value={location}
							onChange={(e) => updateFields({ location: e.target.value })}
							type="text"
							name="location"
							id="location"
							autoComplete="location"
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
							value={vacancies}
							onChange={(e) => updateFields({ vacancies: e.target.value })}
							type="text"
							name="vacancies"
							id="vacancies"
							autoComplete="vacancies"
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
							value={minSalary}
							onChange={(e) => updateFields({ minSalary: e.target.value })}
							type="text"
							name="minSalary"
							id="minSalary"
							autoComplete="minSalary"
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
							value={maxSalary}
							onChange={(e) => updateFields({ maxSalary: e.target.value })}
							type="text"
							name="maxSalary"
							id="maxSalary"
							autoComplete="maxSalary"
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
							value={maxQualification}
							onChange={(e) =>
								updateFields({ maxQualification: e.target.value })
							}
							id="maxQualification"
							name="maxQualification"
							autoComplete="maxQualification"
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
							value={degree}
							onChange={(e) => updateFields({ degree: e.target.value })}
							type="text"
							name="degree"
							id="degree"
							autoComplete="degree"
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
							value={startDate}
							onChange={(e) => updateFields({ startDate: e.target.value })}
							type="date"
							name="startDate"
							id="startDate"
							autoComplete="startDate"
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
							value={endDate}
							onChange={(e) => updateFields({ endDate: e.target.value })}
							type="date"
							name="endDate"
							id="endDate"
							autoComplete="endDate"
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
						<SelectInput
							multiple
							options={skillData}
							value={value}
							onChange={(o) => {
								updateFields({ skills: value })
								setValue(o);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechnicalInfo;
