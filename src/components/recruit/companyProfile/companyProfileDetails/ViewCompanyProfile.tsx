import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "../../../Modal";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { companyTagData } from "../../../../constants/companyTagsData";
import { INITIAL_DATA } from "./CompanyProfileDetails";
import { useUpdateCompanyProfileMutation } from "../../../../features/company/updateCompanyProfileDetailsApiSlice";
import { toast } from "react-hot-toast";

const ViewCompanyProfile = ({
	data,
	userData,
	setUserData,
	isSuccess,
	setCtype,
	cType,
}) => {
	const [open, setOpen] = useState(false);
	const [updateCompanyProfile] = useUpdateCompanyProfileMutation();

	useEffect(() => {
		if (isSuccess) {
			setUserData({
				description: data?.description || "",
				teamSize: data?.teamSize || "",
				founded: data?.founded || "",
				type: data?.type || "",
				tags: data?.tags || "",
			});
		}
	}, [isSuccess, data]);

	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			await updateCompanyProfile(userData).unwrap();
			toast.success("Update successfull");
			setOpen((prev) => !prev);
		} catch (err) {
			console.log("Error on company login", err);
		}
	};

	const handleCancel = () => {
		setUserData(INITIAL_DATA);
	};
	return (
		<>
			<div className="relative bg-white p-10 rounded-lg mt-5">
				<div
					onClick={() => setOpen((prev) => !prev)}
					title="edit"
					className=" absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
				>
					<Pencil className="w-[15px] h-[15px]" />
				</div>
				<div className="px-4 sm:px-0">
					<h3 className="text-base font-semibold leading-7 text-gray-900">
						Applicant Information
					</h3>
					<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
						Personal details and application.
					</p>
				</div>
				<div className="mt-6 border-t border-gray-100">
					<dl className="divide-y divide-gray-100">
						<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
							<dt className="text-sm font-medium leading-6 text-gray-900">
								Company type
							</dt>
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
								{data?.type}
							</dd>
						</div>
						<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
							<dt className="text-sm font-medium leading-6 text-gray-900">
								Founded year
							</dt>
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
								{data?.founded}
							</dd>
						</div>
						<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
							<dt className="text-sm font-medium leading-6 text-gray-900">
								Team size
							</dt>
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
								{data?.teamSize}
							</dd>
						</div>
						<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
							<dt className="text-sm font-medium leading-6 text-gray-900">
								Tags
							</dt>
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
								{data?.tags?.map((item, index) => (
									<span
										className="mr-2 bg-slate-200 p-2 rounded-lg"
										key={index}
									>
										{item}
									</span>
								))}
							</dd>
						</div>
						<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
							<dt className="text-sm font-medium leading-6 text-gray-900">
								About
							</dt>
							<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
								{data?.description}
							</dd>
						</div>
					</dl>
				</div>
			</div>

			{/* modal */}
			{open && (
				<Modal classes="w-[50%] h-[90%] overflow-auto">
					<form onSubmit={handleUpdate}>
						<div className="pb-12">
							<h2 className="text-base font-semibold leading-7 text-gray-900">
								Basic information
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								Increase the quality of your hire
							</p>

							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="col-span-full">
									<label
										htmlFor="about"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Company description
									</label>
									<div className="mt-2">
										<textarea
											value={userData.description}
											onChange={(e) =>
												setUserData({
													...userData,
													description: e.target.value,
												})
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

								<div className="sm:col-span-3">
									<label
										htmlFor="country"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Company type
									</label>
									<div className="mt-2">
										<select
											value={userData.type}
											onChange={(e) =>
												setUserData({ ...userData, type: e.target.value })
											}
											id="category"
											name="category"
											autoComplete="country-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										>
											<option value="">Select type</option>
											<option value="Private">Private</option>
											<option value="Semi-Private">Semi-Private</option>
											<option value="Govt-Undertaken">Govt-Undertaken</option>
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
											options={companyTagData}
											value={cType}
											onChange={(o) => {
												setCtype(o);
												setUserData({ ...userData, tags: cType });
											}}
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Team size
									</label>
									<div className="mt-2">
										<input
											value={userData.teamSize}
											onChange={(e) =>
												setUserData({ ...userData, teamSize: e.target.value })
											}
											type="text"
											name="minExprience"
											id="minExprience"
											autoComplete="minExprience"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="500+"
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Established
									</label>
									<div className="mt-2">
										<input
											value={userData.founded}
											onChange={(e) =>
												setUserData({ ...userData, founded: e.target.value })
											}
											type="text"
											name="minExprience"
											id="minExprience"
											autoComplete="minExprience"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="1563"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-6 flex items-center justify-end gap-x-6">
							<button
								onClick={() => setOpen((prev) => !prev)}
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
				</Modal>
			)}
		</>
	);
};

export default ViewCompanyProfile;
