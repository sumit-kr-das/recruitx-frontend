import FormWrapper from "./FormWrapper";

type TUserData = {
	name: string;
	email: string;
	phone: string;
	password: string;
};

type TUserFormProps = TUserData & {
	updateFields: (fields: Partial<TUserData>) => void;
};

const BasicDetails = ({
	name,
	email,
	phone,
	password,
	updateFields,
}: TUserFormProps) => {
	return (
		<FormWrapper title="Basic Details">
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Your name
				</label>
				<div className="mt-2">
					<input
						value={name}
						onChange={(e) => updateFields({ name: e.target.value })}
						type="text"
						required
						placeholder="Enter your original name"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Email address
				</label>
				<div className="mt-2">
					<input
						value={email}
						onChange={(e) => updateFields({ email: e.target.value })}
						type="email"
						required
						placeholder="Enter your email address"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="phone"
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					Phone no
				</label>
				<div className="mt-2">
					<input
						value={phone}
						onChange={(e) => updateFields({ phone: e.target.value })}
						type="text"
						required
						placeholder="Enter your phone no"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div className="flex items-center justify-between">
					<label
						htmlFor="password"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Password
					</label>
				</div>
				<div className="mt-2">
					<input
						value={password}
						onChange={(e) => updateFields({ password: e.target.value })}
						type="password"
						required
						placeholder="Enter your password"
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
		</FormWrapper>
	);
};

export default BasicDetails;
