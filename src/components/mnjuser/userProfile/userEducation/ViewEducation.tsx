import { Pen } from "lucide-react";
import { INITIAL_EDU_DATA } from "./UserEducation";

const ShowEduData = ({ item, setEdudata, isSuccess, setOpen }) => {
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

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <h2 className="font-bold text-lg"> {item?.course}</h2>
        <Pen className="w-[12px]" onClick={openModal} />
      </div>
      <h3 className="font-semibold">{item?.college}</h3>
      <h3>
        {item?.passYear} | {item?.courseType}
      </h3>
    </div>
  );
};

const ViewEducation = ({ setOpen, resData, setEdudata, isSuccess }) => {
  return (
    <>
      <div className="mt-4 bg-white p-5 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Education</h2>
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
          <h2>
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
