import { Pencil, Trash2 } from "lucide-react";
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
import { Card } from "../../../ui/card";
import { TApiError } from "../../../@types/TApiError";
import { useToast } from "../../../ui/use-toast";

type jobType = {
    _id: string,
    title: string,
    category: string,
    description: string,
    tags: [string],
    active: boolean,
    shortDescription: string,
    comapanyId: {
        _id: string,
        companyName: string,
        companyProfileId: {
            _id: string,
            logo: string
        }
    },
    info: {
        vacancies: number,
        jobType: string,
        workplaceType: string,
        startDate: string,
        endDate: string,
        roles: string,
        skills: [string],
        minExprience: number,
        maxExprience: number,
        minSalary: number,
        maxSalary: number,
        location: string,
        maxQualification: string,
        degree: string
    },
}
const JobListCard = ({ job }: { job: jobType }) => {
    const [open, setOpen] = useState(false);
    const [deleteJob] = useDeleteJobMutation();
    const { toast } = useToast();

    const handleDelete = async (id: string) => {
        try {
            await deleteJob(id).unwrap();
            toast({
                description: "Job deleted successfully"
            })
        } catch (err) {
            const apiError = err as TApiError;
            toast({
                variant: "destructive",
                description: apiError.data.message
            })
        }
    };

    return (
        <>
            <Card
                className="flex flex-col md:flex-row items-center md:justify-between p-4 mt-5 gap-2"
            >
                <div>
                    <h2 className="font-bold text-slate-600 text-lg text-center sm:text-left">
                        {job?.title}
                    </h2>
                    <p className="mt-2 text-sm text-center md:text-left">{job?.info.roles}</p>
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
                        <DialogContent className={"w-[90%] sm:max-w-[800px] rounded scrollbar-hide overflow-y-scroll max-h-[90%]"}>
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
            </Card>
        </>
    )
}

export default JobListCard