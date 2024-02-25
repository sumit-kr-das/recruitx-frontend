import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "../../../ui/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../../ui/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import DefaultCompany from "../../../assets/default-company-logo.png";
import Loader from "../../../components/loader/Loader";

const PrivateJobs = ({ item }) => {
  if (!item) {
    return <Loader />;
  }
  return (
    <div className="embla__slide">
      <div className="bg-white w-[250px] h-[260px] flex items-center flex-col justify-center text-center p-6 shadow border rounded-xl mt-8">
        <img
          className="relative -top-[30px] w-[100px] h-[100px] rounded-full object-cover border bg-gray-50"
          src={item?.companyProfileId?.logo || DefaultCompany}
          alt="company icon"
        />
        <div className="relative -top-[20px] mb-2">
          <h2 className="font-bold line-clamp-1">{item.companyName}</h2>
          <p className="text-sm mt-2">{item.address}</p>
          <p className="line-clamp-2 mt-2">{item.industry}</p>
          <div className="flex items-center flex-wrap gap-2 my-2">
            <p className="bg-blue-50 text-blue-500 text-xs font-semibold px-2 py-1 rounded-xl">
              {item?.industry?.split(" ")[0]}
            </p>
            <p className="bg-red-50 text-red-500 text-xs font-semibold px-2 py-1 rounded-xl">
              Verified
            </p>
            <p className="bg-green-50 text-green-500 text-xs font-semibold px-2 py-1 rounded-xl">
              {item.address}
            </p>
            <p className="bg-cyan-50 text-cyan-500 text-xs font-semibold px-2 py-1 rounded-xl">
              {item.companyProfileId.type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const SliderContainer: React.FC<PropType> = ({
  slides,
  options,
  data,
  children,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls absolute top-4 right-10">
        <div className="embla__buttons mt-4 flex items-center gap-x-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {data?.map((item, index) => (
            <PrivateJobs item={item} key={index} />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default SliderContainer;
