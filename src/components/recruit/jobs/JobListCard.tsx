import { Pencil, Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useDeleteJobMutation } from "../../../features/company/delete/deleteJobApiSlice";
import { useState } from "react";
import {
    Dialog, DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../ui/dialog";
import EditJobForm from "../companyProfile/EditJobForm";
import { convertDate } from "../../../pages/company/MyJobs";
const JobListCard = ({ job }) => {
    const [open, setOpen] = useState(false);
    const [deleteJob] = useDeleteJobMutation();

    const handleDelete = async (id: string) => {
        try {
            await deleteJob(id).unwrap();
            toast.success("Job deleted successfully");
        } catch (err: any) {
            toast.error(err.data.message);
            console.log("Error on company register", err);
        }
    };

    return (
        <>
            <div
                className="flex flex-col md:flex-row items-center md:justify-between p-4 mt-5 rounded-lg border bg-white gap-2"
            >
                <div>
                    <h2 className="font-bold text-slate-600 text-lg">
                        {job?.title}
                    </h2>
                    <p className="mt-2 text-sm text-center md:text-left">{job?.info.roles}</p>
                </div>
                <div>
                    <p className="text-white text-sm bg-blue-600 px-2 py-1 rounded-md">
                        Applicants
                    </p>
                </div>
                <div>
                    <p className="text-sm text-teal-600">
                        <span className="text-slate-500">Posted: </span>
                        {convertDate(job?.info.startDate)}
                    </p>
                    <p className="text-sm mt-2 text-red-600">
                        <span className="text-slate-500">Expired: </span>
                        {convertDate(job?.info.endDate)}
                    </p>
                </div>
                <div className="flex items-center gap-x-5">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger>
                            <Pencil className="w-[20px] text-white-600" onClick={() => setOpen(true)} />
                        </DialogTrigger>
                        <DialogContent className={"sm:max-w-[800px] rounded scrollbar-hide overflow-y-scroll max-h-[530px]"}>
                            <DialogHeader>
                                <DialogTitle>Edit Job</DialogTitle>
                            </DialogHeader>
                            <EditJobForm job={job} setOpen={setOpen} />
                        </DialogContent>
                    </Dialog>

                    <span
                        onClick={() => handleDelete(job?._id)}
                        className="bg-red-100 px-3 py-2 rounded-lg cursor-pointer"
                    >
                        <Trash2 className="w-[20px] text-red-600" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default JobListCard