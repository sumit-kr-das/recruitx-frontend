import { useState } from "react";
import ArrowImg from "../../assets/categories/arrow.svg";
import CompanyLogo from "../../assets/icons/jio.gif";
import Footer from "../../components/footer/Footer";
import CompanySlider from "../../components/mnjuser/CompanySlider";
import Search from "../../components/mnjuser/userHome/search/Search";
import TopHeader from "../../components/navigation/TopHeader";
import Visitors from "../../components/visitors/Visitors";
import catagoriesData from "../../constants/categoriesData";
import { useViewAllCompaniesQuery } from "../../features/company/get/viewAllCompanies";
import { useGetAllJobsQuery } from "../../features/user/get/getAllJobsApiSlice";
import Container from "../../layout/Container";
import { Button } from "../../ui/button";

const JobContainer = ({ data }) => {
  return (
    <div className="w-[350px] h-[350px] p-6 shadow border rounded-xl">
      <div className="flex items-center gap-2">
        <img
          className="w-[60px] h-[60px] rounded-full object-cover"
          src={CompanyLogo}
          alt="company icon"
        />
        <div>
          <h2 className="font-bold line-clamp-1">
            {data.companyId.companyName}
          </h2>
          <p className="text-sm">{data.info.location}</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold text-xl line-clamp-1">{data.title}</h3>
        <p className="line-clamp-2">{data.description}</p>
      </div>

      <div className="flex items-center flex-wrap gap-2 my-4">
        <p className="bg-blue-50 text-blue-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.vacancies} Positions
        </p>
        <p className="bg-red-50 text-red-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.jobType}
        </p>
        <p className="bg-green-50 text-green-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.minExprience} Years
        </p>
        <p className="bg-cyan-50 text-cyan-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.maxSalary}/Year
        </p>
        <p className="bg-orange-50 text-orange-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.workplaceType}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Button className="bg-cyan-500 hover:bg-cyan-600">Apply Now</Button>
        <Button variant="outline">View Details</Button>
      </div>
    </div>
  );
};

const CompanyContainer = () => {
  return (
    <div className="w-[300px] h-[300px] flex items-center flex-col justify-center text-center p-6 shadow border rounded-xl">
      <img
        className="relative -top-[30px] w-[140px] h-[140px] rounded-full object-cover"
        src={CompanyLogo}
        alt="company icon"
      />
      <div className="relative -top-[20px] mb-2">
        <h2 className="font-bold line-clamp-1">Google Pvt Ltd.</h2>
        <p className="text-sm mt-2">Kalkata</p>
        <p className="line-clamp-2 mt-2">IT company with best projects</p>
        <div className="flex items-center flex-wrap gap-2 my-2">
          <p className="bg-blue-50 text-blue-500 text-sm font-semibold px-4 py-2 rounded-xl">
            Software
          </p>
          <p className="bg-red-50 text-red-500 text-sm font-semibold px-4 py-2 rounded-xl">
            Verified
          </p>
          <p className="bg-green-50 text-green-500 text-sm font-semibold px-4 py-2 rounded-xl">
            Kalkata
          </p>
          <p className="bg-cyan-50 text-cyan-500 text-sm font-semibold px-4 py-2 rounded-xl">
            4 Vacancies
          </p>
          {/* <p className="bg-orange-50 text-orange-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.workplaceType}
        </p> */}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [loadjobs, setloadJobs] = useState(6);

  const { data: companyData } = useViewAllCompaniesQuery();
  const { data: jobData } = useGetAllJobsQuery({
    limit: loadjobs,
  });

  const handleLoad = () => {
    setloadJobs((prev) => prev + 3);
  };

  console.log(companyData);

  return (
    <>
      {/* Header */}
      <TopHeader />

      {/* Search */}
      <Container className="pt-32 h-screen flex flex-col items-center justify-center">
        {/* title */}
        <div className="mx-auto max-w-4xl text-center mb-10">
          <div className=" flex items-center justify-center">
            <p className="bg-blue-50 border border-blue-400 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold">
              🎉 RecruitX
            </p>
          </div>
          <h1 className="my-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent md:text-6xl">
            Connecting talents to career opportunities seamlessly
          </h1>
          <p className="mx-auto max-w-xl sm:text-xl/relaxed">
            Recruitx connects skilled candidates with the suitable recruiters
            from different companies. Explore the jobs for you.
          </p>
        </div>

        {/* search */}
        <Search />

        {/* categories */}
        <div className="mt-20 flex items-center justify-center flex-wrap gap-4">
          {catagoriesData.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white gap-2 px-3 py-4 rounded-lg cursor-pointer border-2 shadow-sm hover:shadow-lg"
            >
              <img src={item.logo} alt={item.title} />
              <div className="flex items-center gap-1">
                <h3 className="ont-medium">{item.title}</h3>
                <img src={ArrowImg} alt="arrowimg" />
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        {/* Jobs */}
        <div>
          <div className="mx-auto max-w-xl text-center mb-10">
            <h1 className="text-4xl font-extrabold">
              Top companies <span className="text-cyan-500">hiring now</span>
            </h1>
            <p className="mt-4 sm:text-xl/relaxed">
              Some recent comapnies are finding candidates for their urgent
              roles here.
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-y-8">
            {jobData?.map((item, index) => (
              <JobContainer key={index} data={item} />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center">
            <Button onClick={handleLoad}>Load more ...</Button>
          </div>
        </div>

        {/* Companies */}
        <div className="mt-20">
          <div className="mx-auto max-w-xl text-center mb-10">
            <h1 className="text-4xl font-extrabold">
              Featured companies <br />
              <span className="text-cyan-500"> actively hiring</span>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Popular companies are hiring actively the skilled and suitable
              candidates on recruitx.
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-y-16">
            {[...Array(8)].map((item, index) => (
              <CompanyContainer key={index} data={item} />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center ">
            <Button onClick={handleLoad}>Load more ...</Button>
          </div>
        </div>
      </Container>

      {/* Visitors */}
      <Visitors />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
