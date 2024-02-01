import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Search from "../../components/mnjuser/userHome/search/Search";
import TopHeader from "../../components/navigation/TopHeader";
import Categories from "../../components/user/Categories";
import CompanyContainer from "../../components/user/CompanyContainer";
import JobContainer from "../../components/user/JobContainer";
import UserHero from "../../components/user/UserHero";
import UserTitleWrapper from "../../components/user/UserTitleWrapper";
import Visitors from "../../components/visitors/Visitors";
import { useViewAllCompaniesQuery } from "../../features/company/get/viewAllCompanies";
import { useGetAllJobsQuery } from "../../features/user/get/getAllJobsApiSlice";
import Container from "../../layout/Container";
import Steps from "../../components/user/Steps";
import { useGetWebStatsQuery } from "../../features/statics/getWebStatsApiSlice";

const HomePage = () => {
  const [loadjobs, setloadJobs] = useState(6);
  const [loadcompanies, setLoadCompanies] = useState(1);

  const { data: jobData } = useGetAllJobsQuery({
    limit: loadjobs,
  });
  const { data: companyData } = useViewAllCompaniesQuery({
    limit: loadcompanies,
  });
  const { data: stats } = useGetWebStatsQuery();

  const handleLoadJobs = () => {
    setloadJobs((prev) => prev + 3);
  };

  const handleLoadCompanyes = () => {
    setLoadCompanies((prev) => prev + 3);
  };

  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      <Container className="pt-32">
        <UserHero />
        <Search />
        <Categories />
        <UserTitleWrapper
          title="Get Hired in"
          titleVariant="4 Quick Easy Steps"
          des="The quickest and most effective way to get hired by the top firm working in your career interest areas."
        >
          <Steps />
        </UserTitleWrapper>
        {/* Jobs */}
        {jobData && (
          <UserTitleWrapper
            title="Top companies"
            titleVariant="hiring no"
            des="Some recent comapnies are finding candidates for their urgent
              roles here."
            handleLoadJobs={handleLoadJobs}
          >
            {jobData?.map((item, index) => (
              <JobContainer key={index} data={item} />
            ))}
          </UserTitleWrapper>
        )}
        {/* Companies */}
        {companyData && (
          <UserTitleWrapper
            title="Featured companies"
            titleVariant="actively hiring"
            des="Popular companies are hiring actively the skilled and suitable
          candidates on recruitx."
            handleLoadJobs={handleLoadCompanyes}
          >
            {[...Array(8)]?.map((item, index) => (
              <CompanyContainer key={index} data={item} />
            ))}
          </UserTitleWrapper>
        )}
        {stats && (
          <UserTitleWrapper
            title="Trusted by"
            titleVariant="Jobseekers & Companies"
            des="Recruitx has a greate achivement of stats and proudly show it how we are chaning the hiring industry."
          >
            <Visitors data={stats} />
          </UserTitleWrapper>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
