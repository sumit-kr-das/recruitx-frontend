import { Link } from "react-router-dom";
import RocketImg from "../../../../assets/icons/ear-section.png";
import { useGetJobRecomandationQuery } from "../../../../features/user/get/getJobRecomendationApiSlice";
import { Loader } from "lucide-react";
import "../../../../embla.css";
import JobSlider from "./JobSlider";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "start" };

const OtherJobs = () => {
  const { data, isLoading, isSuccess } = useGetJobRecomandationQuery({
    hasInfo: false,
    limit: 20,
  });
  const otherJobs = (
    <div className="relative mt-4 bg-white p-8 rounded-xl border">
      <div className="flex gap-2">
        <img src={RocketImg} width={40} height={40} alt="rocket_default" />
        <div>
          <p className="font-semibold text-xl">
            {isSuccess && data?.length} Early access roles from top companies
          </p>
          <p className="text-xs">
            See what recruiters are searching for, even before they post a job
          </p>
        </div>
      </div>
      <div className="w-[750px]">
        {/* jobs slider was here */}
        <JobSlider data={data} options={OPTIONS} />
      </div>
    </div>
  );

  return isLoading ? <Loader /> : otherJobs;
};

export default OtherJobs;
