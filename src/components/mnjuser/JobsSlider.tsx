"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CompanyLogo from "../../assets/default-company-logo.png";
import StarSVG from "../../assets/icons/star.svg";
import LocationSVG from "../../assets/icons/locIcon.svg";
import JobsSVG from "../../assets/icons/jobs.svg";
import RightArrowSVG from "../../assets/icons/right-arrow-crsl.svg";
import { useGetJobRecomandationQuery } from "../../features/user/get/getJobRecomendationApiSlice";
import { coundDay } from "./JobSlider";

const jobs = [
  {
    title: "Express Developer",
    company: "Devstack Solutions",
    location: "Dubai, UAE",
    star: "4.5",
    time: "32",
  },
  {
    title: "Android Developer",
    company: "Amazon",
    location: "Noida, Uttar Pradesh",
    star: "4.5",
    time: "12",
  },

  {
    title: "Web Developer",
    company: "DesignX Digital",
    location: "Delhi, Uttar Pradesh",
    star: "3.5",
    time: "6",
  },
  {
    title: "AI/ML Engineer",
    company: "Open AI",
    location: "America, USA",
    star: "4.5",
    time: "8",
  },
  {
    title: "Software Dveloper",
    company: "Cure.fit",
    location: "Kalkata, West Bengal",
    star: "4.5",
    time: "14",
  },

  {
    title: "NodeJS Developer",
    company: "Flipcart",
    location: "Noida, Uttar Pradesh",
    star: "4.5",
    time: "4",
  },
];

type TSlidesPerView = {
  slidesPerView: number;
};

const JobsSlider = ({ slidesPerView }: TSlidesPerView) => {
  const swiperRef = React.useRef<any>(null);
  const { data } = useGetJobRecomandationQuery({
    hasInfo: false,
    limit: 45,
  });
  console.log(data);

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
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data?.map((job, index) => (
          <SwiperSlide key={index} className="mb-6">
            <div className="bg-white w-72 h-36 py-2 px-4 ml-6  border rounded-lg transition ease-in delay-75 cursor-pointer hover:shadow-lg">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-semibold mt-2 truncate w-[80%]">{job?.title}</h2>
                  <p className="text-xs">Leading IT MNC</p>
                </div>
                <p className="text-xs">{coundDay(job?.updatedAt)}</p>
              </div>
              <div className="flex gap-2 my-4">
                <div className="flex items-center gap-1 bg-slate-200 py-1 px-2 rounded-xl">
                  <img src={StarSVG} width={10} alt="star" />
                  <p className="text-xs font-semibold">4.2</p>
                </div>
                <div className="bg-slate-200 py-1 px-2 rounded-xl">
                  <p className="text-xs font-semibold">Indian MNC</p>
                </div>
                <div className="bg-slate-200 py-1 px-2 rounded-xl">
                  <p className="text-xs font-semibold">Service</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <img src={JobsSVG} width={10} alt="location" />
                  <p className="truncate overflow-hidden text-xs">{job?.info?.minExprience}-{job?.info?.maxExprience} Yrs</p>
                </div>
                <div className="flex gap-1">
                  <img src={LocationSVG} width={10} alt="location" />
                  <p className="truncate overflow-hidden text-xs">
				  {job?.info?.location}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JobsSlider;
