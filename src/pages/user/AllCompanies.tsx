import { Link } from "react-router-dom";
import DefaultCompanyImg from "../../assets/default-company-logo.png";
import StarSVG from "../../assets/icons/star.svg";
import TopHeader from "../../components/navigation/TopHeader";
import { useViewAllCompaniesQuery } from "../../features/company/get/viewAllCompanies";
import Container from "../../layout/Container";
import Footer from "../../components/footer/Footer";

const Job = ({ item }) => {
  return (
    <Link to={`/mnjuser/company/${item?._id}`}>
      <div className="bg-white w-52 h-44 p-4 ml-6 flex items-center flex-col justify-center text-center border rounded-lg transition ease-in delay-75 cursor-pointer shadow-lg hover:shadow-lg">
        <img
          src={DefaultCompanyImg}
          width={40}
          alt="company_default"
          className="border rounded-lg"
        />
        <p className="font-semibold mt-2 truncate w-[80%]">
          {item.companyName}
        </p>
        <div className="flex items-center justify-between my-1">
          <div className="flex items-center gap-1">
            <img src={StarSVG} width={10} alt="star" />
            <p className="text-xs">4.5</p>
          </div>
          <p className="mx-1 text-xs font-semibold text-gray-300">&#124;</p>
          <p className="text-xs">120 reviews</p>
        </div>
        <Link to="/" className="text-blue-600 text-xs font-semibold">
          View all
        </Link>
      </div>
    </Link>
  );
};

const AllCompanies = () => {
  const { data } = useViewAllCompaniesQuery();

  return (
    <>
      <TopHeader />
      <main className="max-w-screen-xl mx-auto pb-10 flex justify-between">
        <Container className="mt-24">
          <div className="flex items-center flex-col justify-center text-center">
            {data?.length === 0 ? (
              <h1 className="text-2xl font-bold">No companies found</h1>
            ) : (
              <h1 className="text-2xl font-bold">
                Total {data?.length} companies found
              </h1>
            )}
            <p className="mt-2">
              Exclusive opportunities based on what recruiters are searching
              for,
              <br /> even before they post a job on RecruitX
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-5">
            {data?.map((item, index) => (
              <Job item={item} key={index} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default AllCompanies;
