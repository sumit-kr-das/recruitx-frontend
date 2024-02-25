import Company from "./Company";
import OtherJobs from "./OtherJobs";
import RecommendedJobs from "./RecommendedJobs";

const HomeFeed = () => {
  // const { data, isLoading } = useViewAllCompaniesQuery({ limit: 10 });
  return (
    <div className="mx-4">
      <RecommendedJobs />
      <OtherJobs />
      <Company />
    </div>
  );
};

export default HomeFeed;
