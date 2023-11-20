import { industryTypes } from "../../../constants/industryTypes";

const BasicInfo = () => {
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
								type="text"
								name="username"
								id="username"
								autoComplete="username"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="janesmith"
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
							id="about"
							name="about"
							rows={3}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							defaultValue={""}
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
							id="country"
							name="country"
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
			</div>
		</div>
	);
};

export default BasicInfo;