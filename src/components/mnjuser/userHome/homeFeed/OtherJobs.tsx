import { EmblaOptionsType } from "embla-carousel";
import RocketImg from "../../../../assets/icons/ear-section.png";
import "../../../../embla.css";
import { useGetJobRecomandationQuery } from "../../../../features/user/get/getJobRecomendationApiSlice";
import { BaseSkeletonCard } from "../../../skeleton/BaseSkeletonCard";
import JobSlider from "./JobSlider";

const OPTIONS: EmblaOptionsType = { align: "start" };

const OtherJobs = () => {
  const { data, isLoading, isSuccess } = useGetJobRecomandationQuery({
    hasInfo: false,
    limit: 20,
  });

  return (
    <div className="relative mt-8 md:mt-4 md:bg-white md:p-8 md:rounded-xl md:border">
      <div className="flex gap-2 w-[70%] sm:w-full">
        <img src={RocketImg} width={40} height={40} alt="rocket_default" />
        <div>
          <p className="font-semibold md:text-xl line-clamp-1">
            {isSuccess && data?.length} Early access roles from top companies
          </p>
          <p className="text-xs line-clamp-1">
            See what recruiters are searching for, even before they post a job
          </p>
        </div>
      </div>
      <div className="w-[100%] mt-4">
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

export default OtherJobs;
