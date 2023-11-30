import { Link } from "react-router-dom";
import RocketImg from "../../../../assets/icons/ear-section.png";
import JobsSlider from "../../JobsSlider";
import { useGetJobRecomandationQuery } from "../../../../features/user/get/getJobRecomendationApiSlice";
import { Loader } from "lucide-react";

const OtherJobs = () => {
  const { data, isLoading, isSuccess } = useGetJobRecomandationQuery({
    hasInfo: false,
    limit: 20,
  });
  const otherJobs = (
    <div className="bg-white border rounded-lg mt-4 shadow-md">
      <div className="flex justify-between p-6">
        <div className="flex gap-2">
          <img src={RocketImg} width={40} height={40} alt="rocket_default" />
          <div>
            <p className="font-bold">
              {isSuccess && data?.length} Early access roles from top companies
            </p>
            <p className="text-xs">
              See what recruiters are searching for, even before they post a job
            </p>
          </div>
        </div>
        <Link to="/" className="text-blue-600 font-semibold">
          View all
        </Link>
      </div>
      <div className="w-[750px]">
        <JobsSlider data={data} slidesPerView={2.5} />
      </div>
    </div>
  );

  return isLoading ? <Loader /> : otherJobs;
};

export default OtherJobs;
