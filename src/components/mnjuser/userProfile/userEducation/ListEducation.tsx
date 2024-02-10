import { Pen, Trash2 } from "lucide-react";
import { useState } from "react";
import { TApiError } from "../../../../@types/TApiError";
import { useDeleteUserEduMutation } from "../../../../features/user/delete/deleteUserEduApiSlice";
import { useToast } from "../../../../ui/use-toast";
import Loader from "../../../loader/Loader";
import UpdateUserEducation from "./UpateUserEducation";

type TListEducationProps = {
  item: {
    _id: string;
    degree: string;
    college: string;
    course: string;
    courseType: string;
    admissionYear: number;
    passYear: number;
    marks: number;
  };
};

const ListEducation = ({ item }: TListEducationProps) => {
  const [deleteUserEdu] = useDeleteUserEduMutation();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    try {
      await deleteUserEdu(id).unwrap();
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
  };

  if (!item) return <Loader />;

  return (
    <>
      <div className="mb-4 flex items-center justify-between p-5 bg-[#FAFAFA] rounded-lg border mt-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg"> {item?.course}</h2>
          </div>
          <h3 className="font-semibold">{item?.college}</h3>
          <h3>
            {item?.passYear} | {item?.courseType}
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
      <UpdateUserEducation
        data={item}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </>
  );
};

export default ListEducation;
