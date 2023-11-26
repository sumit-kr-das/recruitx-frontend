import React, { useEffect, useState } from "react";
import { useViewCompanyQuery } from "../../../features/company/viewCompanyApiSlice";
import { Mail, Pencil, Phone, MapPin, CheckCheck } from "lucide-react";
import UserDefault from "../../../assets/default-company-logo.png";
import { convertDate } from "../../../pages/company/MyJobs";
import Modal from "../../Modal";
import { industryTypes } from "../../../constants/industryTypes";

const INITIAL_DATA = {
	name: "",
	email: "",
	phone: "",
	companyName: "",
	industry: "",
	designation: "",
	pin: "",
	address: "",
};

const CompanyInfo = () => {
	const [update, setUpdate] = useState(INITIAL_DATA);
	const [open, setOpen] = useState(false);

	const { data, isLoading, isSuccess } = useViewCompanyQuery();

	if (isSuccess) {
		console.log(data[0]);
	}

	// set the data into edit modal
	useEffect(() => {
		if (isSuccess) {
			setUpdate({
				name: data[0]?.name || "",
				email: data[0]?.email || "",
				phone: data[0]?.phone || "",
				companyName: data[0]?.companyName || "",
				industry: data[0]?.industry || "",
				designation: data[0]?.designation || "",
				pin: data[0]?.pin || "",
				address: data[0]?.address || "",
			});
		}
	}, [isSuccess, data]);

	const handleUpdate = () => {};

	const companyProfile = (
		<>
			<div className="relative flex items-center justify-between bg-white p-5 rounded-lg gap-5">
				<div
					// onClick={() => setOpen((prev) => !prev)}
					title="edit"
					className=" absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
				>
					<Pencil className="w-[15px] h-[15px]" />
				</div>
				<div className="w-[15%] flex items-center flex-col">
					<img
						src={UserDefault}
						width={180}
						alt="user_default"
						className="rounded-full object-cover border"
					/>
					<button className="mt-2 bg-orange-500 text-white text-sm px-5 py-2 rounded-md hover:bg-orange-600">
						Change Profile
					</button>
				</div>
				<div className="w-[85%]">
					<div className="border-b flex items-end justify-between mb-4 pb-4">
						<div>
							<div className="flex items-center gap-2">
								<h2 className="text-2xl font-bold capitalize">
									{isSuccess && data[0]?.companyName}
								</h2>
								<div
									title={
										isSuccess && data[0]?.approve ? "Approved" : "Not approved"
									}
									className={`${
										isSuccess && data[0]?.approve
											? "bg-green-400"
											: "bg-red-400"
									} flex items-center justify-center w-[20px] h-[20px] p-1  text-white rounded-full`}
								>
									<CheckCheck />
								</div>
							</div>
							<p className="text-sm text-slate-600 capitalize">
								{isSuccess && data[0]?.industry} company
							</p>
							<h3 className="flex items-center text-sm text-slate-600 capitalize">
								<MapPin className="w-[15px]" />
								{isSuccess && data[0]?.address} | Pin-
								{isSuccess && data[0]?.pin}
							</h3>
						</div>
						<div className="flex items-center gap-4">
							<p className="text-sm">
								<span className="text-slate-500 ">Profile Created - </span>
								{isSuccess && data && convertDate(data[0]?.createdAt)}
							</p>
							<p className="text-sm">
								<span className="text-slate-500 ">Profile last updated - </span>
								{isSuccess && data && convertDate(data[0]?.updatedAt)}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-5">
						<div className="flex items-center gap-2">
							<Phone className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
							<div>
								<h3 className="text-slate-500 text-sm">Call</h3>
								<p className="text-sm">+91 {isSuccess && data[0]?.phone}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Mail className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
							<div>
								<h3 className="text-slate-500 text-sm">Email</h3>
								<p className="text-sm">{isSuccess && data[0]?.email}</p>
							</div>
						</div>
					</div>
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
								Update your basic information
							</p>

							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-full">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Company name
									</label>
									<div className="mt-2">
										<input
											disabled
											value={update.companyName}
											// onChange={(e) =>
											// 	setUserData({ ...userData, github: e.target.value })
											// }
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
										Email
									</label>
									<div className="mt-2">
										<input
											value={update.email}
											onChange={(e) =>
												setUpdate({ ...update, email: e.target.value })
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
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Phone
									</label>
									<div className="mt-2">
										<input
											value={update.phone}
											onChange={(e) =>
												setUpdate({ ...update, phone: e.target.value })
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
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Recruiter name
									</label>
									<div className="mt-2">
										<input
											value={update.name}
											onChange={(e) =>
												setUpdate({ ...update, name: e.target.value })
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
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Designation
									</label>
									<div className="mt-2">
										<input
											value={update.designation}
											onChange={(e) =>
												setUpdate({ ...update, designation: e.target.value })
											}
											type="text"
											name="minExprience"
											id="minExprience"
											autoComplete="minExprience"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
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
											value={update.address}
											onChange={(e) =>
												setUpdate({ ...update, address: e.target.value })
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
										Industry
									</label>
									<div className="mt-2">
										<select
											value={update.industry}
											onChange={(e) =>
												setUpdate({ ...update, industry: e.target.value })
											}
											id="category"
											name="category"
											autoComplete="country-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										>
											<option value="">Select industry</option>
											{industryTypes.map((item, index) => (
												<option key={index} value={item}>
													{item}
												</option>
											))}
										</select>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Pin
									</label>
									<div className="mt-2">
										<input
											value={update.pin}
											onChange={(e) =>
												setUpdate({ ...update, pin: e.target.value })
											}
											type="text"
											name="minExprience"
											id="minExprience"
											autoComplete="minExprience"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

	return isLoading ? (
		<p> Loading... </p>
	) : isSuccess ? (
		companyProfile
	) : (
		<p>Unsuccessfull...</p>
	);
};

export default CompanyInfo;