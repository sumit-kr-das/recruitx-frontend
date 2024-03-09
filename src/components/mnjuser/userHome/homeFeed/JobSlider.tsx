import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { TJobs } from "../../../../@types/publicTypes/TJobs";
import DefaultCompany from "../../../../assets/default-company-logo.png";
import { selectCurrentRole } from "../../../../features/auth/authSlice";
import { useSetUserApplyMutation } from "../../../../features/user/post/setUserApplyAPiSlice";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../../../ui/EmblaCarouselArrowButtons";
import { Button } from "../../../../ui/button";
import { useToast } from "../../../../ui/use-toast";

type PropType = {
  data: TJobs[];
  options?: EmblaOptionsType;
};

const JobSlider: React.FC<PropType> = ({ options, data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const navigate = useNavigate();
  const [setApply] = useSetUserApplyMutation();
  const user = useSelector(selectCurrentRole);
  const { toast } = useToast();

  const applyForJob = async (jobId: string) => {
    try {
      await setApply(jobId).unwrap();
      toast({
        description: "Job Applied Successfully",
      });
      navigate("/mnjuser/appliedJobs");
    } catch (err) {
      toast({
        variant: "destructive",
        description: "You already applied this job!",
      });
    }
  };

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls absolute -top-4 md:top-4 right-0 md:right-10">
        <div className="embla__buttons mt-4 flex items-center gap-x-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data?.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="bg-white w-full sm:w-[280px] h-[220px] md:h-[320px] p-6 shadow border rounded-xl">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full object-cover border bg-gray-50"
                    src={
                      item?.companyId?.companyProfileId?.logo || DefaultCompany
                    }
                    alt="company icon"
                  />
                  <div>
                    <h2 className="font-bold line-clamp-1">
                      {item.companyId.companyName}
                    </h2>
                    <p className="text-sm line-clamp-1">{item.info.location}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-bold text-base md:text-lg line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="line-clamp-2 text-xs md:text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center flex-wrap gap-2 my-4">
                    <p className="bg-blue-50 text-blue-500 text-xs font-semibold px-2 py-1 rounded-xl">
                      {item.info.vacancies} Positions
                    </p>
                    <p className="bg-red-50 text-red-500 text-xs font-semibold px-2 py-1 rounded-xl">
                      {item.info.jobType}
                    </p>
                    <p className="bg-green-50 text-green-500 text-xs font-semibold px-2 py-1 rounded-xl">
                      {item.info.minExprience} Years
                    </p>
                    <p className="bg-cyan-50 text-cyan-500 text-xs font-semibold px-2 py-1 rounded-xl">
                      {item.info.maxSalary}/Year
                    </p>
                    <p className="bg-orange-50 text-orange-500 text-xs font-semibold px-2 py-1 rounded-xl">
                      {item.info.workplaceType}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  {user ? (
                    <Button
                      onClick={() => applyForJob(item?._id)}
                      className="bg-cyan-500 hover:bg-cyan-600 text-xs"
                    >
                      Apply Now
                    </Button>
                  ) : (
                    <Link to="/login">
                      <Button className="bg-cyan-500 hover:bg-cyan-600 text-xs">
                        Apply Now
                      </Button>
                    </Link>
                  )}
                  <Link to={`/jobDetails/${item._id}`}>
                    <Button variant="outline" className="tex-xs">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSlider;
