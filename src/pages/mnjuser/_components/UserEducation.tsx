import { useState } from "react";
import { useGetUserEduQuery } from "../../../features/user/get/getUserEduApiSlice";
import SetUserEducation from "../../../components/mnjuser/userProfile/userEducation/SetUserEducation";
import ViewEducation from "../../../components/mnjuser/userProfile/userEducation/ViewEducation";

export const INITIAL_EDU_DATA = {
  id: "",
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
        />
      )}
    </div>
  );
};

export default UserEducation;
