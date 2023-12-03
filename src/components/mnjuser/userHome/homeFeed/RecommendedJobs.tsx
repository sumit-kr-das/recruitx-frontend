import { useGetJobRecomandationQuery } from "../../../../features/user/get/getJobRecomendationApiSlice";
import Loader from "../../../loader/Loader";
import JobSlider from "../../JobSlider";
import { Link } from "react-router-dom";

const RecommendedJobs = () => {
  const { data, isSuccess, isLoading } = useGetJobRecomandationQuery({
    hasInfo: true,
    limit: "",
  });
  const recommendedJobs = (
    <>
      {data?.length && (
        <div className="bg-white border rounded-lg mt-4 shadow-md">
          <div className="flex justify-between p-6">
            <h1 className="font-bold">
              {isSuccess && data?.length} recommended jobs for you
            </h1>
            {/* <Link to="/" className="text-blue-600 font-semibold">
              View all
            </Link> */}
          </div>
          <div className="w-[750px]">
            <JobSlider slidesPerview={3.5} data={data} />
          </div>
        </div>
      )}
    </>
  );

  return isLoading ? <Loader /> : recommendedJobs;
};

export default RecommendedJobs;
