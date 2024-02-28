import { EmblaOptionsType } from "embla-carousel";
import { useGetJobRecomandationQuery } from "../../../../features/user/get/getJobRecomendationApiSlice";
import JobSlider from "./JobSlider";
import "../../../../embla.css";

const OPTIONS: EmblaOptionsType = { align: "start" };

const RecommendedJobs = () => {
  const { data } = useGetJobRecomandationQuery({
    hasInfo: true,
    limit: 20,
  });
  return (
    <div className="relative mt-4 bg-white p-8 rounded-xl border">
      <div>
        <p className="font-semibold text-xl">Recommanded jobs ony for you</p>
        <p className="text-sm">Top result based on your profile</p>
      </div>
      <div className="w-[100%] pt-4">
        <JobSlider data={data} options={OPTIONS} />
      </div>
    </div>
  );
};

export default RecommendedJobs;
