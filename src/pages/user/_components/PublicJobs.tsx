import { useState } from "react";
import JobContainer from "../../../components/user/JobContainer";
import UserTitleWrapper from "../../../components/user/UserTitleWrapper";
import { useGetAllJobsQuery } from "../../../features/user/get/getAllJobsApiSlice";
import { Button } from "../../../ui/button";

const PublicJobs = () => {
  const [loadjobs, setloadJobs] = useState<number>(6);
  const { data } = useGetAllJobsQuery({
    limit: loadjobs,
  });
  const handleLoadJobs = () => {
    setloadJobs((prev) => prev + 3);
  };
  return (
    <>
      {data && data.length > 0 && (
        <>
          <UserTitleWrapper
            title="Top companies"
            titleVariant="hiring no"
            des="Some recent comapnies are finding candidates for their urgent
              roles here."
          >
            {data?.map((item, index) => (
              <JobContainer key={index} data={item} />
            ))}
          </UserTitleWrapper>
          <div className="mt-8 flex items-center justify-center">
            <Button onClick={handleLoadJobs}>Load more</Button>
          </div>
        </>
      )}
    </>
  );
};

export default PublicJobs;
