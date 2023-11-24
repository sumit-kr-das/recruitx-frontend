import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StarSVG from "../../assets/icons/star.svg";
import tcsGIF from "../../assets/icons/tcs.gif";
import RightArrowSVG from "../../assets/icons/right-arrow-crsl.svg";
import { Link } from "react-router-dom";
import { companySliderData } from "../../constants/companySliderData";

const CompanySlider = () => {
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
				slidesPerView={3}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				{companySliderData.map((item, index) => (
					<SwiperSlide key={index} className="mb-6">
						<div className="bg-white w-52 h-44 p-4 ml-6 flex items-center flex-col justify-center text-center border rounded-lg transition ease-in delay-75 cursor-pointer hover:shadow-lg">
							<img
								src={item.src}
								width={40}
								alt="company_default"
								className="border rounded-lg"
							/>
							<p className="font-semibold mt-2">{item.title}</p>
							<div className="flex items-center justify-between my-1">
								<div className="flex items-center gap-1">
									<img src={StarSVG} width={10} alt="star" />
									<p className="text-xs">{item.ratings}</p>
								</div>
								<p className="mx-1 text-xs font-semibold text-gray-300">
									&#124;
								</p>
								<p className="text-xs">{item.review} reviews</p>
							</div>
							<Link to="/" className="text-blue-600 text-xs font-semibold">
								View all
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CompanySlider;
