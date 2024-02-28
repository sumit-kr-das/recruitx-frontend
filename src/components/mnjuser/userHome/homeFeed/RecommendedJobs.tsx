import { EmblaOptionsType } from "embla-carousel";
import "../../../../embla.css";
import { useGetJobRecomandationQuery } from "../../../../features/user/get/getJobRecomendationApiSlice";
import { BaseSkeletonCard } from "../../../skeleton/BaseSkeletonCard";
import JobSlider from "./JobSlider";

const OPTIONS: EmblaOptionsType = { align: "start" };

const RecommendedJobs = () => {
  const { data, isLoading } = useGetJobRecomandationQuery({
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
        {data || !isLoading ? (
          <JobSlider data={data} options={OPTIONS} />
        ) : (
          <div className="w-full flex items-center justify-between gap-4">
            {[...Array(3)].map((_, index) => (
              <BaseSkeletonCard key={index} className="w-[280px] h-[320px]" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedJobs;
