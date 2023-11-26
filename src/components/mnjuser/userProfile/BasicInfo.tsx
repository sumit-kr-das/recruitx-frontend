import { Mail, Phone, Pencil } from "lucide-react";
import UserDefault from "../../../assets/user-default-profile.png";
import { useViewUserProfileQuery } from "../../../features/user/userProfile/viewUserProfileApiSlice";
import { convertDate } from "../../../pages/company/MyJobs";
import Modal from "../../Modal";
import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "../../../features/user/userProfile/updateUserProfileApiSlice";
import { toast } from "react-hot-toast";

const INITIAL_DATA = {
	name: "",
	email: "",
	phoneNo: "",
	workStatus: "",
};

const BasicInfo = () => {
	const [update, setUpdate] = useState(INITIAL_DATA);
	const [open, setOpen] = useState<boolean>(false);
	const { data, isSuccess, isLoading, isError } = useViewUserProfileQuery();
	const [updateUser] = useUpdateUserMutation();

	// set the data into edit modal
	useEffect(() => {
		if (isSuccess) {
			setUpdate({
				name: data?.name || "",
				email: data?.email || "",
				phoneNo: data?.phoneNo || "",
				workStatus: data?.workStatus || "",
			});
		}
	}, [isSuccess, data]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await updateUser(update).unwrap();
			toast.success("Update successfull");
			setOpen((prev) => !prev);
		} catch (err) {
			console.log("Error on company login", err);
		}
	};
	const basicInfo = (
		<>
			<div className="relative flex items-center justify-between bg-white p-5 rounded-lg gap-5">
				<div
					onClick={() => setOpen((prev) => !prev)}
					title="edit"
					className=" absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
				>
					<Pencil className="w-[15px] h-[15px]" />
				</div>
				<div className="w-[15%] flex items-center flex-col">
					<img
						src={UserDefault}
						// width={180}
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
							<h2 className="text-2xl font-bold capitalize">{data?.name}</h2>
							<p className="text-lg text-slate-600 capitalize">
								{data?.workStatus}
							</p>
						</div>
						<div className="flex items-center gap-4">
							<p className="text-sm">
								<span className="text-slate-500 ">Profile Created - </span>
								{data && convertDate(data?.createdAt)}
							</p>
							<p className="text-sm">
								<span className="text-slate-500 ">Profile last updated - </span>
								{data && convertDate(data?.updatedAt)}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-5">
						<div className="flex items-center gap-2">
							<Phone className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
							<div>
								<h3 className="text-slate-500 text-sm">Call</h3>
								<p className="text-sm">{data?.phoneNo}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Mail className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
							<div>
								<h3 className="text-slate-500 text-sm">Email</h3>
								<p className="text-sm">{data?.email}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* modal */}
			{open && (
				<Modal classes="w-[40%]">
					<div className="pb-4">
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Basic information
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Edit your personal details
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Full name
							</label>
							<div className="mt-2">
								<input
									value={update.name}
									onChange={(e) =>
										setUpdate({ ...update, name: e.target.value })
									}
									type="text"
									required
									placeholder="What is your name?"
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
									value={update.email}
									onChange={(e) =>
										setUpdate({ ...update, email: e.target.value })
									}
									type="email"
									required
									placeholder="Tell us your email id"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Mobile number
							</label>
							<div className="mt-2">
								<input
									value={update.phoneNo}
									onChange={(e) =>
										setUpdate({ ...update, phoneNo: e.target.value })
									}
									type="text"
									required
									placeholder="Mobile number"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label className="block text-sm font-medium leading-6 text-gray-900">
									Work status
								</label>
							</div>
							<div className="mt-2">
								<select
									value={update.workStatus}
									onChange={(e) =>
										setUpdate({ ...update, workStatus: e.target.value })
									}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
								>
									<option value="">Select industry type</option>
									<option value="experienced">I'm experienced</option>
									<option value="fresher">I'm a fresher</option>
								</select>
							</div>
						</div>
						<div className="flex justify-end">
							<div className="flex gap-4">
								<button
									type="button"
									onClick={() => setOpen((prev) => !prev)}
									className="text-white bg-red-400 hover:bg-red-600 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="text-white bg-cyan-400 hover:bg-cyan-600 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
								>
									Edit profile
								</button>
							</div>
						</div>
					</form>
				</Modal>
			)}
		</>
	);

	return isLoading ? (
		<>
			<p>Loading...</p>
		</>
	) : (
		isSuccess && basicInfo
	);
};

export default BasicInfo;