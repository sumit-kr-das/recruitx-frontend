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
    <div className="relative mt-4 md:bg-white md:p-8 md:rounded-xl md:border">
      <div className="w-[70%] sm:w-full">
        <p className="font-semibold md:text-xl line-clamp-1">Recommanded jobs ony for you</p>
        <p className="text-sm line-clamp-1">Top result based on your profile</p>
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
