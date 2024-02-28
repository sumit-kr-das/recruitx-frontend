import { EmblaOptionsType } from "embla-carousel";
import "../../../../embla.css";
import { useViewAllCompaniesQuery } from "../../../../features/company/get/viewAllCompanies";
import CompanySlider from "./CompanySlider";
import Loader from "../../../loader/Loader";
import { BaseSkeletonCard } from "../../../skeleton/BaseSkeletonCard";

const OPTIONS: EmblaOptionsType = { align: "start" };

const Company = () => {
  const { data, isLoading } = useViewAllCompaniesQuery({ limit: 10 });

  if (!data && data?.length === 0) {
    return <Loader />;
  }
  return (
    <div className="relative mt-4 bg-white p-8 rounded-xl border">
      <div>
        <p className="font-semibold text-xl">Top companies</p>
        <p className="text-sm">Hiring for Software Development</p>
      </div>
      <div className="w-[100%] pt-4">
        {data || !isLoading ? (
          <CompanySlider data={data} options={OPTIONS} />
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
