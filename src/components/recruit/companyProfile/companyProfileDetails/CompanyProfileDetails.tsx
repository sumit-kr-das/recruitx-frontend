import { useState } from "react";
import { companyTagData } from "../../../../constants/companyTagsData";
import { useViewCompanyProfileQuery } from "../../../../features/company/get/viewCompanyProfileDetailsApiSlice";
import SetCompanyProfile from "./SetCompanyProfile";
import ViewCompanyProfile from "./ViewCompanyProfile";

// export const INITIAL_DATA = {
//   description: "",
//   teamSize: "",
//   founded: "",
//   type: "",
//   tags: "",
// };

const CompanyProfileDetails = () => {
  // const [userData, setUserData] = useState(INITIAL_DATA);
  // const [cType, setCtype] = useState([companyTagData[0]]);
  const { data, isSuccess, isLoading } = useViewCompanyProfileQuery();

  return isLoading ? (
    <p>Loading...</p>
  ) : isSuccess ? (
    <>
      <ViewCompanyProfile
        data={data}
      />
    </>
  ) : (
    <>
      <SetCompanyProfile

      />
      ;
    </>
  );
};

export default CompanyProfileDetails;
