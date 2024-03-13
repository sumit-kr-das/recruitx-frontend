import { useState } from "react";
import { BaseSkeletonCard } from "../../../components/skeleton/BaseSkeletonCard";
import JobContainer from "../../../components/user/JobContainer";
import UserTitleWrapper from "../../../components/user/UserTitleWrapper";
import { useGetAllJobsQuery } from "../../../features/user/get/getAllJobsApiSlice";

const PublicJobs = () => {
  const [loadjobs, setloadJobs] = useState<number>(6);
  const { data, isLoading } = useGetAllJobsQuery({
    limit: loadjobs,
  });
  const handleLoadJobs = () => {
    setloadJobs((prev) => prev + 3);
  };

  return (
    <>
      <UserTitleWrapper
        title="Top companies"
        titleVariant="hiring no"
        des="Some recent comapnies are finding candidates for their urgent
              roles here."
      >
        {data || !isLoading ? (
          <>
            {data?.map((item, index) => (
              <JobContainer key={index} data={item} />
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
        <p className="underline cursor-pointer font-semibold text-cyan-500" onClick={handleLoadJobs}>Load more</p>
      </div>
    </>
  );
};

export default PublicJobs;
