import { useState } from "react";
import CompanyContainer from "../../../components/user/CompanyContainer";
import UserTitleWrapper from "../../../components/user/UserTitleWrapper";
import { useViewAllCompaniesQuery } from "../../../features/company/get/viewAllCompanies";
import { Button } from "../../../ui/button";
import Loader from "../../../components/loader/Loader";

const PublicCompanies = () => {
  const [loadcompanies, setLoadCompanies] = useState<number>(8);

  const { data } = useViewAllCompaniesQuery({
    limit: loadcompanies,
  });

  const handleLoadCompanyes = () => {
    setLoadCompanies((prev) => prev + 3);
  };

  if (!data || data?.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <UserTitleWrapper
        title="Featured companies"
        titleVariant="actively hiring"
        des="Popular companies are hiring actively the skilled and suitable
          candidates on recruitx."
      >
        {data?.map((item, index) => (
          <CompanyContainer key={index} data={item} />
        ))}
      </UserTitleWrapper>
      <div className="mt-8 flex items-center justify-center">
        <Button onClick={handleLoadCompanyes}>Load more</Button>
      </div>
    </>
  );
};

export default PublicCompanies;
