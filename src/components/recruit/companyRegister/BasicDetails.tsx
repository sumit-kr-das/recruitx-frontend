import FormWrapper from "./FormWrapper";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";

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
					<Input
						value={name}
						onChange={(e) => updateFields({ name: e.target.value })}
						type="text"
						required
						placeholder="Enter your original name"
						className=""
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
					<Input
						value={email}
						onChange={(e) => updateFields({ email: e.target.value })}
						type="email"
						required
						placeholder="Enter your email address"
						className=""
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
					<Input
						value={phone}
						onChange={(e) => updateFields({ phone: e.target.value })}
						type="text"
						required
						placeholder="Enter phone no"
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
					<Input
						value={password}
						onChange={(e) => updateFields({ password: e.target.value })}
						type="password"
						required
						placeholder="Enter your password"
						className=""
					/>
				</div>
			</div>
		</FormWrapper>
	);
};

export default BasicDetails;
