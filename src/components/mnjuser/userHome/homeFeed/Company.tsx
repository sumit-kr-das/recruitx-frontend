import { Link } from "react-router-dom";
import { Loader } from "lucide-react";
import { useViewAllCompaniesQuery } from "../../../../features/company/get/viewAllCompanies";
import NewSlider from "../../../../pages/mnjuser/_components/SliderContainer";
import "../../../../embla.css";
import { EmblaOptionsType } from "embla-carousel";
import SliderContainer from "../../../../pages/mnjuser/_components/SliderContainer";

const OPTIONS: EmblaOptionsType = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Company = () => {
  const { data, isLoading } = useViewAllCompaniesQuery({ limit: 10 });
  // console.log(data);

  return (
    <div className="relative mt-4 bg-white p-8 rounded-xl border">
      <div>
        <p className="font-semibold text-xl">Top companies</p>
        <p className="text-sm">Hiring for Software Development</p>
      </div>
      <div className="w-[100%] pt-4">
        <SliderContainer data={data} slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Company;
