import { industryTypes } from "../../../constants/industryTypes";
import FormWrapper from "./FormWrapper";

type TUserData = {
	companyName: string;
	industry: string;
	designation: string;
	pin: string;
	address: string;
};

type TUserDataProps = TUserData & {
	updateFields: (fields: Partial<TUserData>) => void;
};

const CompanyDetails = ({
	companyName,
	industry,
	designation,
	pin,
	address,
	updateFields,
}: TUserDataProps) => {
	return (
		<FormWrapper title="Company Details">
			<div>
				<label
					htmlFor="companyName"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Company name (as per KYC documents)
				</label>
				<div className="mt-2">
					<input
						value={companyName}
						onChange={(e) => updateFields({ companyName: e.target.value })}
						type="text"
						required
						placeholder="Enter your company name"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="designation"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Your designation
				</label>
				<div className="mt-2">
					<input
						value={designation}
						onChange={(e) => updateFields({ designation: e.target.value })}
						type="text"
						required
						placeholder="Enter your designation"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="pin"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Pin code
				</label>
				<div className="mt-2">
					<input
						value={pin}
						onChange={(e) => updateFields({ pin: e.target.value })}
						type="text"
						required
						placeholder="Enter your pin no"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div className="flex items-center justify-between">
					<label
						htmlFor="address"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Street address
					</label>
				</div>
				<div className="mt-2">
					<input
						value={address}
						onChange={(e) => updateFields({ address: e.target.value })}
						type="text"
						required
						placeholder="Enter your street address"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div className="flex items-center justify-between">
					<label className="block text-sm font-medium leading-6 text-gray-900">
						Select industry
					</label>
				</div>
				<div className="mt-2">
					<select
						value={industry}
						onChange={(e) => updateFields({ industry: e.target.value })}
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					>
						<option value="">Select industry type</option>
						{industryTypes.map((item, index) => (
							<option key={index} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="mt-4 flex items-center gap-2">
				<input
					id="comments"
					name="comments"
					type="checkbox"
					required
					className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
				/>
				<p className=" text-sm text-gray-500">
					I agree to Terms & conditions and Privacy policy
				</p>
			</div>
		</FormWrapper>
	);
};

export default CompanyDetails;
