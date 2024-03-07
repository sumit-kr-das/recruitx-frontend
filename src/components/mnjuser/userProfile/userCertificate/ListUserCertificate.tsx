import { useState } from 'react'
import { TUserCertificate } from '../../../../@types/user/TUserCertificate'
import { useToast } from '../../../../ui/use-toast';
import { useDeleteUserCertificateMutation } from '../../../../features/user/delete/deleteUserCertificateApiSlice';
import { TApiError } from '../../../../@types/TApiError';
import Loader from '../../../loader/Loader';
import { convertDate } from '../../../../pages/company/MyJobs';
import { Pen, Trash2 } from 'lucide-react';
import UpdateCertificate from './UpdateCertificate';

const ListUserCertificate = ({ item }: { item: TUserCertificate }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const { toast } = useToast();
    const [deleteUserCertificate] = useDeleteUserCertificateMutation();
    const handleDelete = async (id: string) => {
        try {
            await deleteUserCertificate(id).unwrap();
            toast({
                description: "Certificate deleted successfully",
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
                        <h2 className="font-bold text-lg"> {item?.title}</h2>
                    </div>
                    <h3 className="font-semibold">{item?.source} </h3>
                    <p>{item?.description}</p>
                    <h3>
                        {convertDate(item?.startDate)} - {item?.endDate ? convertDate(item?.endDate) : "Continue"}
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
            <UpdateCertificate
                data={item}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            />
        </>
    )
}

export default ListUserCertificate