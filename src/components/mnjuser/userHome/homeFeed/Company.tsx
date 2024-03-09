import { EmblaOptionsType } from "embla-carousel";
import "../../../../embla.css";
import { useViewAllCompaniesQuery } from "../../../../features/company/get/viewAllCompanies";
import { BaseSkeletonCard } from "../../../skeleton/BaseSkeletonCard";
import CompanySlider from "./CompanySlider";

const OPTIONS: EmblaOptionsType = { align: "start" };

const Company = () => {
  const { data, isLoading } = useViewAllCompaniesQuery({ limit: 10 });

  return (
    <div className="relative mt-8 md:mt-4 md:bg-white md:p-8 md:rounded-xl md:border">
      <div className="w-[70%] sm:w-full">
        <p className="font-semibold md:text-xl line-clamp-1">Top companies</p>
        <p className="text-sm line-clamp-1">Hiring for Software Development</p>
      </div>
      <div className="w-[100%] pt-4">
        {data || !isLoading ? (
          <>{data && <CompanySlider data={data} options={OPTIONS} />}</>
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

export default Company;
