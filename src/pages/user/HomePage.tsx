import ArrowImg from "../../assets/categories/arrow.svg";
import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import catagoriesData from "../../constants/categoriesData";
import { useSearchDataQuery } from "../../features/user/getSearchData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
	const { data } = useSearchDataQuery();
	console.log("====================================");
	console.log(data);
	console.log("====================================");
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useState<object | null>();

	const search = () =>{
		navigate(`/search?skills=${searchParams?.skill}&exprience=${searchParams?.exprience}&location=${searchParams?.location}`);
	}

	const handelInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        })
    }


	return (
		<div className="max-w-screen-xl mx-auto pb-40">
			{/* title */}
			<div className="flex items-center justify-center flex-col pt-40 pb-10">
				<h1 className="text-5xl font-semibold">Your job search starts here</h1>
				<p className="mt-2 text-xl">Find the role that's right for you.</p>
			</div>
			{/* search */}
			<div className="flex items-center justify-center">
				<div className="bg-white flex items-center justify-center border-2 rounded-xl shadow-md px-4 py-5">
					<div className="flex items-center justify-center ">
						<input
							type="text"
							placeholder="Enter skills / designations / companies"
							className="bg-transparent border-0 outline-none px-2"
							name="skill"
							onChange={handelInfoChange}
						/>
						<div>|</div>
						<input
							type="text"
							placeholder="Select experience"
							className="bg-transparent border-0 outline-none px-2"
							name="exprience"
							onChange={handelInfoChange}

						/>
						<div>|</div>
						<input
							type="text"
							placeholder="Enter location"
							className="bg-transparent border-0 outline-none px-2"
							name="location"
							onChange={handelInfoChange}

						/>
					</div>
					<button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600" onClick={search}>
						Search
					</button>
				</div>
			</div>
			{/* categories */}
			<div className="mt-10 flex items-center justify-center flex-wrap gap-4">
				{catagoriesData.map((item, index) => (
					<div
						key={index}
						className="flex items-center bg-white gap-2 px-3 py-4 rounded-lg cursor-pointer border-2 shadow-sm hover:shadow-lg"
					>
						<img src={item.logo} alt={item.title} />
						<div className="flex items-center gap-1">
							<p className="font-semibold">{item.title}</p>
							<img src={ArrowImg} alt="arrowimg" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
