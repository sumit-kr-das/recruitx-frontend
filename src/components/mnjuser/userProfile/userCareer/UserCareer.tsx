import { useState } from "react";
import { useGetUserCareerQuery } from "../../../../features/user/get/getUserCareerApiSlice";
import SetUserCareer from "./SetUserCareer";
import ViewCareer from "./ViewCareer";

export const INITIAL_CAREER_DATA = {
  id: "",
  industry: "",
  role: "",
  jobRole: "",
  jobType: "",
  employmentType: "",
  skills: "",
  expectedSalary: "",
};

const UserCareer = () => {
  const [edudata, setEdudata] = useState(INITIAL_CAREER_DATA);
  const [open, setOpen] = useState(false);
  const { data, isSuccess } = useGetUserCareerQuery();

  return (
    <div>
      <ViewCareer
        resData={data}
        setOpen={setOpen}
        setEdudata={setEdudata}
        isSuccess={isSuccess}
      />
      {open && (
        <SetUserCareer
          setOpen={setOpen}
          edudata={edudata}
          setEdudata={setEdudata}
        />
      )}
    </div>
  );
};

export default UserCareer;
