import { useEffect, useState } from "react";
import { useGetUserEduQuery } from "../../../../features/user/get/getUserEduApiSlice";
import SetUserEducation from "./SetUserEducation";
import ViewEducation from "./ViewEducation";

const INITIAL_EDU_DATA = {
  degree: "",
  college: "",
  course: "",
  courseType: "",
  admissionYear: "",
  passYear: "",
  marks: "",
};

const UserEducation = () => {
  const [edudata, setEdudata] = useState(INITIAL_EDU_DATA);
  const [open, setOpen] = useState(false);
  const { data, isSuccess } = useGetUserEduQuery();
  // console.log(data);

  return (
    <div>
      <ViewEducation
        resData={data}
        setOpen={setOpen}
        setEdudata={setEdudata}
        isSuccess={isSuccess}
      />
      {open && (
        <SetUserEducation
          setOpen={setOpen}
          edudata={edudata}
          setEdudata={setEdudata}
          isSuccess={isSuccess}
          resData={data}
        />
      )}
    </div>
  );
};

export default UserEducation;
