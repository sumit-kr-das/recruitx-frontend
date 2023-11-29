import { Pen, Trash2 } from "lucide-react";
import { INITIAL_CAREER_DATA } from "./UserCareer";
import { useDeleteUserEduMutation } from "../../../../features/user/delete/deleteUserEduApiSlice";
import { toast } from "react-hot-toast";
import { TApiError } from "../../../../@types/TApiError";

const ShowCareerData = ({ item, setEdudata, isSuccess, setOpen }) => {
  const [deleteUserEdu] = useDeleteUserEduMutation();

  const openModal = () => {
    if (isSuccess) {
      setEdudata({
        id: item?._id || "",
        industry: item?.industry || "",
        role: item?.role || "",
        jobRole: item?.jobRole || "",
        jobType: item?.jobType || "",
        employmentType: item?.employmentType || "",
        skills: item?.skills || "",
        expectedSalary: item?.expectedSalary || "",
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
    <div className="mb-4 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-lg"> {item?.course}</h2>
          <Pen className="w-[12px] cursor-pointer" onClick={openModal} />
        </div>
        <h3 className="font-semibold">{item?.college}</h3>
        <h3>
          {item?.passYear} | {item?.courseType}
        </h3>
      </div>
      <div
        onClick={() => handleDelete(item?._id)}
        className="bg-red-100 px-3 py-2 rounded-lg cursor-pointer"
      >
        <Trash2 className="w-[20px] text-red-600" />{" "}
      </div>
    </div>
  );
};

const ViewCareer = ({ setOpen, resData, setEdudata, isSuccess }) => {
  return (
    <>
      <div className="mt-4 bg-white p-5 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Employment</h2>
          <h2
            onClick={() => {
              setEdudata(INITIAL_CAREER_DATA);
              setOpen((prev) => !prev);
            }}
            className="font-bold text-blue-500 cursor-pointer"
          >
           Add employment
          </h2>
        </div>
        {resData && resData.length == 0 && (
          <h2>
            Mention your employment details including your current and previous
            company work experience.
          </h2>
        )}
        {resData?.map((item, index) => (
          <ShowCareerData
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

export default ViewCareer;