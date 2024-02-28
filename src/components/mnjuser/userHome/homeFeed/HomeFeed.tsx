import Company from "./Company";
import OtherJobs from "./OtherJobs";
import RecommendedJobs from "./RecommendedJobs";

const HomeFeed = () => {
  return (
    <div className="mx-4">
      <RecommendedJobs />
      <OtherJobs />
      <Company />
    </div>
  );
};

export default HomeFeed;
