import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import FilterModal from "./FilterModal";

const FilterJobs = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<div className="bg-white p-8 border rounded-lg">
				{/* heading */}
				<h1 className="text-md font-bold">
					Add preferences to get matching jobs
				</h1>
				{/* Filter 1 */}
				<div className="mt-4">
					<div className="flex items-center">
						<p className="text-sm">Preferred job role</p>
						<MdModeEdit onClick={() => setOpen(true)} className="text-xl ml-1 text-cyan-500 cursor-pointer" />
					</div>
					<div className="flex items-center gap-2 mt-1">
						<p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
							Software Programmer
						</p>
						<p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
							Developer
						</p>
					</div>
				</div>
				{/* Filter 2 */}
				<div className="my-4">
					<div className="flex items-center">
						<p className="text-sm">Preferred work location</p>
						<MdModeEdit onClick={() => setOpen(true)} className="text-xl ml-1 text-cyan-500 cursor-pointer" />
					</div>
					<div className="flex items-center gap-2 mt-1">
						<p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
							Noida
						</p>
						<p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
							New Delhi
						</p>
						<p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
							West Bengal
						</p>
					</div>
				</div>
				{/* Filter 3 */}
				<div className="my-4">
					<div className="flex items-center">
						<p className="text-sm">Preferred salary</p>
						<MdModeEdit onClick={() => setOpen(true)} className="text-xl ml-1 text-cyan-500 cursor-pointer" />
					</div>
					<div className="flex items-center gap-2 mt-1">
						<p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
							₹ 4,00,000
						</p>
					</div>
				</div>
			</div>
			{/* Filter modal */}
			{
				open && <FilterModal open={open} setOpen={setOpen} />
			}
		</>
	);
};

export default FilterJobs;