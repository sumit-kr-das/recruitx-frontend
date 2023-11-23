import { useEffect, useState } from "react";
import { industryTypes } from "../../../constants/industryTypes";
import { tagsData } from "../../../constants/tagsData";
import SelectInput from "../../form/multiSelectInput/SelectInput";

type TUserData = {
	title: string;
	category: string;
	description: string;
	tags: string[];
};

type TUserFormProps = TUserData & {
	updateFields: (fields: Partial<TUserData>) => void;
};

const BasicInfo = ({
	title,
	category,
	description,
	tags,
	updateFields,
}: TUserFormProps) => {
	const [value, setValue] = useState([tagsData[0]]);
	return (
		<div className="pb-12">
			<h2 className="text-base font-semibold leading-7 text-gray-900">
				Basic information
			</h2>
			<p className="mt-1 text-sm leading-6 text-gray-600">
				Increase the quality of your hire
			</p>

			<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="sm:col-span-4">
					<label
						htmlFor="username"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Job title
					</label>
					<div className="mt-2">
						<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
							<input
								value={title}
								onChange={(e) => updateFields({ title: e.target.value })}
								type="text"
								name="title"
								id="title"
								autoComplete="title"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Frontend web developer"
							/>
						</div>
					</div>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="about"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Job description
					</label>
					<div className="mt-2">
						<textarea
							value={description}
							onChange={(e) => updateFields({ description: e.target.value })}
							id="description"
							name="description"
							rows={3}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Enter a breaf description about your job post"
						/>
					</div>
					<p className="mt-3 text-sm leading-6 text-gray-600">
						Write a breaf description about your job.
					</p>
				</div>

				<div className="sm:col-span-3">
					<label
						htmlFor="country"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Category
					</label>
					<div className="mt-2">
						<select
							value={category}
							onChange={(e) => updateFields({ category: e.target.value })}
							id="category"
							name="category"
							autoComplete="country-name"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						>
							<option value="">Select category</option>
							{industryTypes.map((category, index) => (
								<option key={index} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="country"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Select tags
					</label>
					<div className="mt-2 w-full">
						<SelectInput
							multiple
							options={tagsData}
							value={value}
							onChange={(o) => {
								setValue(o);
								// console.log(value,"val");
								// updateFields({tags:value})

							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;
