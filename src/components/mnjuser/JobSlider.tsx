import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StarSVG from "../../assets/icons/star.svg";
import CompanyLogo from "../../assets/default-company-logo.png";
import LocationSVG from "../../assets/icons/locIcon.svg";
import RightArrowSVG from "../../assets/icons/right-arrow-crsl.svg";

const jobs = [
	{
		title: "NodeJS Developer",
		company: "Flipcart",
		location: "Noida, Uttar Pradesh",
		star: "4.5",
		time: "4",
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
		title: "Android Developer",
		company: "Amazon",
		location: "Noida, Uttar Pradesh",
		star: "4.5",
		time: "12",
	},
	{
		title: "Software Dveloper",
		company: "Cure.fit",
		location: "Kalkata, West Bengal",
		star: "4.5",
		time: "14",
	},
	{
		title: "Express Developer",
		company: "Devstack Solutions",
		location: "Dubai, UAE",
		star: "4.5",
		time: "32",
	},
];

const JobSlider = () => {
	const swiperRef = React.useRef<any>(null);
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
				{jobs.map((job, index) => (
					<SwiperSlide key={index} className="mb-6">
						<div className="bg-white w-52 h-36 p-4 ml-6  border rounded-lg transition ease-in delay-75 cursor-pointer hover:shadow-lg">
							<div className="flex justify-between">
								<img
									src={CompanyLogo}
									width={40}
									alt="company_default"
									className="border rounded-lg"
								/>
								<p className="text-xs">{job.time}d ago</p>
							</div>
							<p className="font-semibold mt-2">{job.title}</p>
							<div className="flex items-center justify-between my-1">
								<p className="text-xs">{job.company}</p>
								<div className="flex items-center gap-1">
									<img src={StarSVG} width={10} alt="star" />
									<p className="text-xs">{job.star}</p>
								</div>
							</div>
							<div className="flex gap-1">
								<img src={LocationSVG} width={10} alt="location" />
								<p className="truncate overflow-hidden text-xs">
									{job.location}
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
