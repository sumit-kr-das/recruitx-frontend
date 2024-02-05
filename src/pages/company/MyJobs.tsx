import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { useViewJobsQuery } from "../../features/company/get/viewJobsApiSlice";
import { useGetJobStaticsQuery } from "../../features/statics/getJobStaticsApiSlice";
import Container from "../../layout/Container";
import NotFound from "../../components/notFound/NotFound";

import JobListCard from "../../components/recruit/jobs/JobListCard";

export const convertDate = (srcDate: string) => {
  const startDate = new Date(srcDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return startDate.toLocaleDateString("en-GB", options);
};

const JobsStat = () => {
  const { data, isSuccess } = useGetJobStaticsQuery();

  const jobsStat = (
    <div className="flex items-center gap-x-5">
      <button>All: {data?.all}</button>
      <button>Active: {data?.active}</button>
      <button>Expired: {data?.expired}</button>
    </div>
  );

  return isSuccess ? jobsStat : <p>Error in Job</p>;
};

const MyJobs = () => {
  const { data, isSuccess } = useViewJobsQuery();


  const myJobs = (
    <>
      <Container>
        <TitleBar title="Manage jobs" path="Employer / Dashboard / My Jobs" />
        {data?.length === 0 ? (
          <NotFound />
        ) : (
          <div>
            <JobsStat />
            <div>
              {data?.map((job, index) => (
                <JobListCard job={job} key={index} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>

  );

  return isSuccess ? myJobs : <p>Error in Job</p>;
};

export default MyJobs;
