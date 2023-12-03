import ArrowImg from "../../assets/categories/arrow.svg";
import Footer from "../../components/footer/Footer";
import CompanySlider from "../../components/mnjuser/CompanySlider";
import JobSlider from "../../components/mnjuser/JobSlider";
import Search from "../../components/mnjuser/userHome/search/Search";
import TopHeader from "../../components/navigation/TopHeader";
import Visitors from "../../components/visitors/Visitors";
import catagoriesData from "../../constants/categoriesData";
import { useViewAllCompaniesQuery } from "../../features/company/get/viewAllCompanies";
import { useGetAllJobsQuery } from "../../features/user/get/getAllJobsApiSlice";
import Container from "../../layout/Container";

const HomePage = () => {
  const { data: companyData } = useViewAllCompaniesQuery();

  const { data: jobData } = useGetAllJobsQuery({
    limit: 20,
  });

  return (
    <>
      {/* Header */}
      <TopHeader />

      {/* Search */}
      <Container className="pt-40">
        {/* title */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Connecting talents to career
            <span className="sm:block"> opportunities seamlessly </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Recruitx connects skilled candidates with the suitable recruiters
            from different companies. Explore the jobs for you.
          </p>
        </div>

        {/* search */}
        <Search />

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
      </Container>

      <Container>
        {/* Jobs */}
        <div>
          <div className="mx-auto max-w-xl text-center mb-10">
            <h1 className="text-2xl font-extrabold">
              Top companies hiring now
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Some recent comapnies are finding candidates for their urgent
              roles here.
            </p>
          </div>
          <JobSlider slidesPerview={5} data={jobData} />
        </div>
        {/* Companies */}
        <div className="mt-20">
          <div className="mx-auto max-w-xl text-center mb-10">
            <h1 className="text-2xl font-extrabold">
              Featured companies actively hiring
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Popular companies are hiring actively the skilled and suitable
              candidates on recruitx.
            </p>
          </div>
          <CompanySlider slidesPerview={5} data={companyData} />
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
