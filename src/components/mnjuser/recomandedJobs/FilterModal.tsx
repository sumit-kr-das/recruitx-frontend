import React, { useState } from "react";
import Modal from "../Modal";
import { MdClose } from "react-icons/md";

interface openModal {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setSearchFilter: Function
}

const FilterModal = ({ open, setOpen, setSearchFilter }: openModal) => {
	const [role, setRole] = useState([])
	const [salary, setSalary] = useState();
	const [location, setLocation] = useState([]);

	const handelRoles = (e) => {
		if (e.key === "Enter") {
			setRole([...role, e.target.value]);
			console.log(role);

		}
	}

	const handelLocation = (e) => {
		if (e.key === "Enter") {
			setLocation([...location, e.target.value]);
			console.log(location);

		}
	}

	const handelFilterSubmit = async() =>{
		const filter = {
			role:role,
			salary,
			location
		}

		localStorage.setItem("filter", JSON.stringify(filter));
		setSearchFilter(filter);
		setOpen(false);
	}

	const cancelFilter = () =>{
		localStorage.removeItem("filter");
		setSearchFilter();
		setOpen(false);
	}

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
					onKeyDown={handelRoles}
				/>
				<div className="flex items-center gap-2 mt-1 flex-wrap">
					{
						role.map((item, index) => (<>
							<div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
								<p className="text-sm font-semibold ">{item}</p>
								<MdClose className="text-xs cursor-pointer" onClick={() => setRole(role.filter((_, i) => i !== index))} />
							</div>
						</>))
					}
					{/* <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
						<p className="text-sm font-semibold ">Software Programmer</p>
						<MdClose className="text-xs cursor-pointer" />
					</div>
					<div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
						<p className="text-sm font-semibold ">Developer</p>
						<MdClose className="text-xs cursor-pointer" />
					</div> */}
				</div>
			</div>
			{/* Salary  */}
			<div className="mt-4">
				<p className="font-semibold">Preferred Salary</p>
				<input
					className="border rounded-lg px-2 py-2 w-full my-2"
					type="text"
					placeholder="Enter your preferred salary"
					onChange={(e)=>setSalary(e.target.value)}
				/>
			</div>
			{/* location */}
			<div className="mt-4">
				<p className="font-semibold">Preferred Work Locations (Max 10)</p>
				<input
					className="border rounded-lg px-2 py-2 w-full my-2"
					type="text"
					placeholder="Enter your preferred location"
					onKeyDown={handelLocation}
				/>
				<div className="flex items-center gap-2 mt-1 flex-wrap">
					{
						location.map((item, index) => (
							<>
								<div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
									<p className="text-sm font-semibold ">{item}</p>
									<MdClose className="text-xs cursor-pointer" onClick={() => setLocation(location.filter((_, i) => i !== index))}/>
								</div>
							</>
						))
					}
					{/* <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
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
					</div> */}
				</div>
			</div>
			<div className="flex items-center gap-4 mt-10">
				<button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600" onClick={handelFilterSubmit}>
					Save
				</button>
				<button
					onClick={cancelFilter}
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