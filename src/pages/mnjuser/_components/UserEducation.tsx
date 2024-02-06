import { useState } from "react";
import AddUserEducation from "../../../components/mnjuser/userProfile/userEducation/AddUserEducation";
import ViewEducation from "../../../components/mnjuser/userProfile/userEducation/ViewEducation";

const UserEducation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <ViewEducation setIsOpen={setIsOpen} />
      <AddUserEducation setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default UserEducation;
