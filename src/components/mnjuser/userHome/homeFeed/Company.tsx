import { EmblaOptionsType } from "embla-carousel";
import "../../../../embla.css";
import { useViewAllCompaniesQuery } from "../../../../features/company/get/viewAllCompanies";
import CompanySlider from "./CompanySlider";

const OPTIONS: EmblaOptionsType = { align: "start" };

const Company = () => {
  const { data } = useViewAllCompaniesQuery({ limit: 10 });

  return (
    <div className="relative mt-4 bg-white p-8 rounded-xl border">
      <div>
        <p className="font-semibold text-xl">Top companies</p>
        <p className="text-sm">Hiring for Software Development</p>
      </div>
      <div className="w-[100%] pt-4">
        <CompanySlider data={data} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Company;
