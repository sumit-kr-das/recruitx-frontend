import { useState } from 'react'
import Loader from '../../../loader/Loader'
import { convertDate } from '../../../../pages/company/MyJobs'
import { Pen, Trash2 } from 'lucide-react'
import { useToast } from '../../../../ui/use-toast'
import { TApiError } from '../../../../@types/TApiError'
import { useDeleteUserProjectMutation } from '../../../../features/user/delete/deleteUserProjectApiSlice'
import { TUserProject } from '../../../../@types/user/TUserProject'
import UpdateUserProject from './UpdateUserProject'
const ListUserProject = ({ item }: { item: TUserProject }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const { toast } = useToast();
    const [deleteUserProject] = useDeleteUserProjectMutation();
    const handleDelete = async (id: string) => {
        try {
            await deleteUserProject(id).unwrap();
            toast({
                description: "project deleted successfully",
            });
        } catch (err) {
            const apiError = err as TApiError;
            toast({
                variant: "destructive",
                description: apiError.data.message,
            });
        }
    }
    if (!item) return <Loader />
    return (
        <>
            <div className="mb-4 sm:flex sm:items-center sm:justify-between p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold text-lg"> {item?.name}</h2>
                    </div>
                    <h3 className="font-semibold">{item?.associate} </h3>
                    <p>{item?.description}</p>
                    <ul className="flex items-center gap-x-5 mt-3 mb-3 flex-wrap">
                        {item?.skills.map((item) => (
                            <li
                                className="px-4 py-1 bg-white border rounded-full capitalize mt-2"
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h3>
                        {convertDate(item?.startDate)} - {item?.endDate ? convertDate(item?.endDate) : "Continue"}
                    </h3>
                </div>
                <div className="flex items-center gap-5 mt-2 sm:mt-0">
                    <div
                        onClick={() => setOpenDialog(true)}
                        className="bg-green-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-200 "
                    >
                        <Pen className="w-5 text-green-600" />
                    </div>
                    <div
                        onClick={() => handleDelete(item?._id)}
                        className="bg-red-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-red-200 "
                    >
                        <Trash2 className="w-5 text-red-600" />
                    </div>
                </div>
            </div>
            <UpdateUserProject
                data={item}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            />
        </>
    )
}

export default ListUserProject