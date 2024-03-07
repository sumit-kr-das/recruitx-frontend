import React, { useState } from 'react'
import { TUserExp } from '../../../../@types/user/TUserExp'
import Loader from '../../../loader/Loader'
import { convertDate } from '../../../../pages/company/MyJobs'
import { Pen, Trash2 } from 'lucide-react'
import { useDeleteUserExpMutation } from '../../../../features/user/delete/deleteUserExpApiSlice'
import { useToast } from '../../../../ui/use-toast'
import { TApiError } from '../../../../@types/TApiError'
import UpdateUserExp from './UpdateUserExp'
const ListUserExp = ({ item }: { item: TUserExp }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const { toast } = useToast();
    const [deleteUserExp] = useDeleteUserExpMutation();
    const handleDelete = async (id: string) => {
        try {
            await deleteUserExp(id).unwrap();
            toast({
                description: "Education deleted successfully",
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
            <div className="mb-4 flex items-center justify-between p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold text-lg"> {item?.companyName}</h2>
                    </div>
                    <h3 className="font-semibold">{item?.designation} ( {item?.experience} years)</h3>
                    <p>{item?.jobProfile}</p>
                    <ul className="flex items-center gap-x-5 mt-3 mb-3">
                        {item?.skills.map((item) => (
                            <li
                                className="px-4 py-1 bg-white border rounded-full capitalize"
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h3>
                        {item?.type}| {convertDate(item?.startDate)} | {convertDate(item?.endDate)}
                    </h3>
                </div>
                <div className="flex items-center gap-5">
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
            <UpdateUserExp
                data={item}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            />
        </>
    )
}

export default ListUserExp