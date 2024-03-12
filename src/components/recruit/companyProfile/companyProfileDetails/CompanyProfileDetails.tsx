import { useViewCompanyProfileQuery } from "../../../../features/company/get/viewCompanyProfileDetailsApiSlice";
import SetCompanyProfile from "./SetCompanyProfile";
import ViewCompanyProfile from "./ViewCompanyProfile";
import Loader from "../../../loader/Loader";

const CompanyProfileDetails = () => {
  const { data, isSuccess, isLoading } = useViewCompanyProfileQuery();

  if (isLoading) return <Loader />;

  return isSuccess && data ? (
    <>
      <ViewCompanyProfile data={data} />
    </>
  ) : (
    <>
      <SetCompanyProfile />
    </>
  );
};

export default CompanyProfileDetails;
