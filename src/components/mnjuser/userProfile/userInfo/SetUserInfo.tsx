import { toast } from "react-hot-toast";
import { languageData } from "../../../../constants/languageData";
import { qualificationData } from "../../../../constants/qualificationData";
import { useSetUserMutation } from "../../../../features/user/userInfo/setUserInfoDataApiSlice";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { INITIAL_DATA } from "./OtherInfo";
import { tagsData } from "../../../../constants/tagsData";

const SetUserInfo = ({
	userData,
	setUserData,
	lang,
	setLang,
	tags,
	setTags,
}) => {
	const [setUser] = useSetUserMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await setUser(userData).unwrap();
			toast.success("Save successfull");
		} catch (err: any) {
			toast.success(err?.data?.msg);
			console.log("Error on company login", err);
		}
	};
	const handleCancel = () => {
		setUserData(INITIAL_DATA);
	};
	return (
		<div className="relative bg-white p-5 rounded-lg gap-5 mt-5 shadow-lg">
			<form onSubmit={handleSubmit}>
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
								Headline
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<input
										value={userData.objective}
										onChange={(e) =>
											setUserData({ ...userData, objective: e.target.value })
										}
										type="text"
										name="title"
										id="title"
										autoComplete="title"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder="Enter a short headline"
									/>
								</div>
							</div>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="about"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								About yourself
							</label>
							<div className="mt-2">
								<textarea
									value={userData.bio}
									onChange={(e) =>
										setUserData({ ...userData, bio: e.target.value })
									}
									id="description"
									name="description"
									rows={3}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Enter a breaf description about yourself"
								/>
							</div>
							<p className="mt-3 text-sm leading-6 text-gray-600">
								Write a breaf description about your career.
							</p>
						</div>

						<div className="col-span-full">
							<label
								htmlFor="street-address"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Full address
							</label>
							<div className="mt-2">
								<input
									value={userData.address}
									onChange={(e) =>
										setUserData({ ...userData, address: e.target.value })
									}
									type="text"
									name="location"
									id="location"
									autoComplete="location"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="country"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Gender
							</label>
							<div className="mt-2">
								<select
									value={userData.gender}
									onChange={(e) =>
										setUserData({ ...userData, gender: e.target.value })
									}
									id="category"
									name="category"
									autoComplete="country-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option value="">Select category</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="country"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Select language
							</label>
							<div className="mt-2 w-full">
								<SelectInput
									multiple
									options={languageData}
									value={lang}
									onChange={(o) => {
										setLang(o);
										setUserData({ ...userData, language: lang });
									}}
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Age
							</label>
							<div className="mt-2">
								<input
									value={userData.age}
									onChange={(e) => setUserData({ ...userData, age: e.target.value })}
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
								htmlFor="last-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Date of birth
							</label>
							<div className="mt-2">
								<input
									value={userData.dateOfBirth}
									onChange={(e) =>
										setUserData({ ...userData, dateOfBirth: e.target.value })
									}
									type="date"
									name="minExprience"
									id="minExprience"
									autoComplete="minExprience"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Github profile
							</label>
							<div className="mt-2">
								<input
									value={userData.github}
									onChange={(e) => setUserData({ ...userData, github: e.target.value })}
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
								htmlFor="last-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Linkedin profile
							</label>
							<div className="mt-2">
								<input
									value={userData.linkedIn}
									onChange={(e) =>
										setUserData({ ...userData, linkedIn: e.target.value })
									}
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
								Highest qualification
							</label>
							<div className="mt-2">
								<select
									value={userData.maxQualification}
									onChange={(e) =>
										setUserData({ ...userData, maxQualification: e.target.value })
									}
									id="category"
									name="category"
									autoComplete="country-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option value="">Select qualification</option>
									{qualificationData.map((category, index) => (
										<option key={index} value={category}>
											{category}
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
								Select Skills
							</label>
							<div className="mt-2 w-full">
								<SelectInput
									multiple
									options={tagsData}
									value={tags}
									onChange={(o) => {
										setTags(o);
										setUserData({ ...userData, skills: tags });
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						onClick={handleCancel}
						type="button"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Cancel
					</button>

					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default SetUserInfo;
