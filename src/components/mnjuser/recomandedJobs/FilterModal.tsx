import React from "react";
import Modal from "../Modal";
import { MdClose } from "react-icons/md";

interface openModal {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal = ({ open, setOpen }: openModal) => {
	return (
		<Modal classes="w-1/3">
			<h1 className="text-xl font-bold">Manage your job preferences</h1>
			{/* Job role */}
			<div className="mt-4">
				<p className="font-semibold">Preferred Job Role (Max 3)</p>
				<input
					className="border rounded-lg px-2 py-2 w-full my-2"
					type="text"
					placeholder="Enter your preferred job role"
				/>
				<div className="flex items-center gap-2 mt-1">
					<div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
						<p className="text-sm font-semibold ">Software Programmer</p>
						<MdClose className="text-xs cursor-pointer" />
					</div>
					<div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
						<p className="text-sm font-semibold ">Developer</p>
						<MdClose className="text-xs cursor-pointer" />
					</div>
				</div>
			</div>
			{/* Salary  */}
			<div className="mt-4">
				<p className="font-semibold">Preferred Salary</p>
				<input
					className="border rounded-lg px-2 py-2 w-full my-2"
					type="text"
					placeholder="Enter your preferred salary"
				/>
			</div>
			{/* location */}
			<div className="mt-4">
				<p className="font-semibold">Preferred Work Locations (Max 10)</p>
				<input
					className="border rounded-lg px-2 py-2 w-full my-2"
					type="text"
					placeholder="Enter your preferred location"
				/>
				<div className="flex items-center gap-2 mt-1">
					<div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
						<p className="text-sm font-semibold ">New Delhi</p>
						<MdClose className="text-xs cursor-pointer" />
					</div>
					<div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
						<p className="text-sm font-semibold ">Kalkata</p>
						<MdClose className="text-xs cursor-pointer" />
					</div>
					<div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
						<p className="text-sm font-semibold ">Guskara</p>
						<MdClose className="text-xs cursor-pointer" />
					</div>
				</div>
			</div>
			<div className="flex items-center gap-4 mt-10">
				<button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600">
					Save
				</button>
				<button
					onClick={() => setOpen(false)}
					className="bg-orange-500 text-white text-sm px-5 py-2 rounded-md hover:bg-orange-600"
				>
					Cancel
				</button>
			</div>
			<div className="absolute top-4 right-4" onClick={() => setOpen(false)}>
				<MdClose className="text-2xl cursor-pointer" />
			</div>
		</Modal>
	);
};

export default FilterModal;