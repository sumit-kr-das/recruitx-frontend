import { useState } from "react";
import { BaseSkeletonCard } from "../../../components/skeleton/BaseSkeletonCard";
import CompanyContainer from "../../../components/user/CompanyContainer";
import UserTitleWrapper from "../../../components/user/UserTitleWrapper";
import { useViewAllCompaniesQuery } from "../../../features/company/get/viewAllCompanies";
import { Button } from "../../../ui/button";

const PublicCompanies = () => {
  const [loadcompanies, setLoadCompanies] = useState<number>(8);

  const { data, isLoading } = useViewAllCompaniesQuery({
    limit: loadcompanies,
  });

  const handleLoadCompanyes = () => {
    setLoadCompanies((prev) => prev + 3);
  };

  return (
    <>
      <UserTitleWrapper
        title="Featured companies"
        titleVariant="actively hiring"
        des="Popular companies are hiring actively the skilled and suitable
          candidates on recruitx."
      >
        {data || !isLoading ? (
          <>
            {data?.map((item, index) => (
              <CompanyContainer key={index} data={item} />
            ))}
          </>
        ) : (
          <>
            {[...Array(6)].map((_, index) => (
              <BaseSkeletonCard key={index} />
            ))}
          </>
        )}
      </UserTitleWrapper>
      <div className="mt-8 flex items-center justify-center">
        <Button onClick={handleLoadCompanyes}>Load more</Button>
      </div>
    </>
  );
};

export default PublicCompanies;
