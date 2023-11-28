import { useState } from "react";
import ViewEducation from "./ViewEducation";
import SetUserEducation from "./SetUserEducation";

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

  return (
    <div>
      <ViewEducation setOpen={setOpen} />
      {open && <SetUserEducation setOpen={setOpen} />}
    </div>
  );
};

export default UserEducation;
