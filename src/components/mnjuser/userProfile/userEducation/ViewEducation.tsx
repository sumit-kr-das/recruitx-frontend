import { Pen, Trash2 } from "lucide-react";
import { INITIAL_EDU_DATA } from "../../../../pages/mnjuser/_components/UserEducation";
import { useDeleteUserEduMutation } from "../../../../features/user/delete/deleteUserEduApiSlice";
import { toast } from "react-hot-toast";
import { TApiError } from "../../../../@types/TApiError";

const ShowEduData = ({ item, setEdudata, isSuccess, setOpen }) => {
  const [deleteUserEdu] = useDeleteUserEduMutation();

  const openModal = () => {
    if (isSuccess) {
      setEdudata({
        id: item?._id || "",
        degree: item?.degree || "",
        college: item?.college || "",
        course: item?.course || "",
        courseType: item?.courseType || "",
        admissionYear: item?.admissionYear || "",
        passYear: item?.passYear || "",
        marks: item?.marks || "",
      });
    }
    setOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUserEdu(id).unwrap();
      toast.success("Education deleted");
    } catch (err) {
      const apiError = err as TApiError;
      toast.error(apiError.data.message);
    }
  };

  return (
    <div className="mb-4 flex items-center justify-between p-5 bg-[#FAFAFA] rounded-lg border mt-4">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-lg"> {item?.course}</h2>
          {/* <Pen className="w-[12px] cursor-pointer" onClick={openModal} /> */}
        </div>
        <h3 className="font-semibold">{item?.college}</h3>
        <h3>
          {item?.passYear} | {item?.courseType}
        </h3>
      </div>
      <div className="flex items-center gap-5">
        <div
          onClick={openModal}
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
  );
};

const ViewEducation = ({ setOpen, resData, setEdudata, isSuccess }) => {
  return (
    <>
      <div className="relative mt-4 bg-white p-10 rounded-lg border shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">
            Education
          </h2>
          <h2
            onClick={() => {
              setEdudata(INITIAL_EDU_DATA);
              setOpen((prev) => !prev);
            }}
            className="font-bold text-blue-500 cursor-pointer"
          >
            Add Education
          </h2>
        </div>
        {resData && resData.length == 0 && (
          <h2 className="mt-1 text-sm leading-6 text-gray-600">
            Mention your educational details including your current and previous
            educational details.
          </h2>
        )}
        {resData?.map((item, index) => (
          <ShowEduData
            key={index}
            item={item}
            setEdudata={setEdudata}
            isSuccess={isSuccess}
            setOpen={setOpen}
          />
        ))}
      </div>
    </>
  );
};

export default ViewEducation;
