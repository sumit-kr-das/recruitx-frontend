import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StarSVG from "../../assets/icons/star.svg";
import CompanyLogo from "../../assets/default-company-logo.png";
import LocationSVG from "../../assets/icons/locIcon.svg";
import RightArrowSVG from "../../assets/icons/right-arrow-crsl.svg";
import { useGetJobRecomandationQuery } from "../../features/user/get/getJobRecomendationApiSlice";

const coundDay = (dateString: string) => {
  const date = new Date(dateString);

  // Calculate the difference in milliseconds
  const timeDifference = Date.now() - date.getTime();

  // Calculate the difference in days
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Format the result
  const formattedDate =
    daysAgo === 0
      ? "Today"
      : daysAgo === 1
      ? "Yesterday"
      : `${daysAgo} days ago`;

  return formattedDate;
  console.log(formattedDate);
};

const JobSlider = () => {
  const swiperRef = React.useRef<any>(null);
  const { data, isSuccess } = useGetJobRecomandationQuery({
    hasInfo: "",
    limit: "",
  });

  if (isSuccess) {
    console.log(data);
  }
  return (
    <div className="relative">
      <div
        onClick={() => swiperRef.current.slideNext()}
        className="bg-black w-8 h-8 rounded-full flex items-center justify-center absolute top-1/2 right-1 -translate-y-1/2 z-10 cursor-pointer"
      >
        <img src={RightArrowSVG} width={8} alt="right_arrow" />
      </div>
      <div
        onClick={() => swiperRef.current.slidePrev()}
        className="bg-black w-8 h-8 rounded-full flex items-center justify-center absolute top-1/2 left-1 -translate-y-1/2 z-10 cursor-pointer"
      >
        <img
          src={RightArrowSVG}
          width={8}
          alt="left_arrow"
          className="rotate-180"
        />
      </div>
      <Swiper
        spaceBetween={5}
        slidesPerView={3.5}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data?.map((job, index) => (
          <SwiperSlide key={index} className="mb-6">
            <div className="bg-white w-52 h-36 p-4 ml-6  border rounded-lg transition ease-in delay-75 cursor-pointer hover:shadow-lg">
              <div className="flex justify-between">
                <img
                  src={CompanyLogo}
                  width={40}
                  alt="company_default"
                  className="border rounded-lg"
                />
                <p className="text-xs">{coundDay(job?.updatedAt)}</p>
              </div>
              <p className="font-semibold text-sm mt-2 truncate ">
                {job?.title}
              </p>
              <div className="flex items-center justify-between my-1">
                <p className="text-xs">Company Name</p>
                <div className="flex items-center gap-1">
                  <img src={StarSVG} width={10} alt="star" />
                  <p className="text-xs">4.2</p>
                </div>
              </div>
              <div className="flex gap-1">
                <img src={LocationSVG} width={10} alt="location" />
                <p className="truncate overflow-hidden text-xs">
                  {job?.info?.location}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JobSlider;
