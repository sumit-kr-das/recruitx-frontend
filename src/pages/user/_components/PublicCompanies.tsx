import { useState } from "react";
import CompanyContainer from "../../../components/user/CompanyContainer";
import UserTitleWrapper from "../../../components/user/UserTitleWrapper";
import { useViewAllCompaniesQuery } from "../../../features/company/get/viewAllCompanies";
import { Button } from "../../../ui/button";

const PublicCompanies = () => {
  const [loadcompanies, setLoadCompanies] = useState<number>(8);

  const { data } = useViewAllCompaniesQuery({
    limit: loadcompanies,
  });

  const handleLoadCompanyes = () => {
    setLoadCompanies((prev) => prev + 3);
  };

  return (
    <>
      {data && data.length > 0 && (
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
          <>
            <h1>{data.length}</h1>
          </>
          <div className="mt-8 flex items-center justify-center">
            <Button onClick={handleLoadCompanyes}>Load more</Button>
          </div>
        </>
      )}
    </>
  );
};

export default PublicCompanies;
