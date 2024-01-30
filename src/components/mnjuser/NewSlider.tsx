import { Link } from "react-router-dom";
import { Card, CardContent } from "../../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Loader from "../loader/Loader";
import { useViewAllCompaniesQuery } from "../../features/company/get/viewAllCompanies";
import DefaultCompanyImg from "../../assets/default-company-logo.png";
import StarSVG from "../../assets/icons/star.svg";
import { TCompany } from "../../@types/TCompany";

interface SliderProps {
  data: TCompany[];
}

const Slider = ({ data }: SliderProps) => {
  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent className="-ml-1">
        {data?.map((item, index) => (
          <Link key={index} to={`/mnjuser/company/${item?._id}`}>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 h-44 w-44">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center flex-col p-6">
                    <img
                      src={DefaultCompanyImg}
                      width={40}
                      alt="company_default"
                      className="border rounded-lg"
                    />
                    <p className="font-semibold mt-2 truncate w-[80%]">
                      {item.companyName}
                    </p>
                    <div className="flex items-center justify-between my-1">
                      <div className="flex items-center gap-1">
                        <img src={StarSVG} width={10} alt="star" />
                        <p className="text-xs">4.5</p>
                      </div>
                      <p className="mx-1 text-xs font-semibold text-gray-300">
                        &#124;
                      </p>
                      <p className="text-xs">120 reviews</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const NewSlider = () => {
  const { data, isLoading } = useViewAllCompaniesQuery();

  const CompanyCarousel = (
    <div className="w-full bg-white py-4 px-8 rounded-lg my-10">
      <div className="flex justify-between p-6">
        <div>
          <p className="font-bold">Top companies</p>
          <p className="text-xs mt-2">Hiring for Software Development</p>
        </div>
        <Link to="/mnjuser/companies" className="text-blue-600 font-semibold">
          View all
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Slider data={data as TCompany[]} />
      </div>
    </div>
  );

  return isLoading ? <Loader /> : data && CompanyCarousel;
};

export default NewSlider;
