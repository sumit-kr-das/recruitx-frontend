import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import JobDetailMain from "../../components/mnjuser/jobDetail/JobDetailMain";
import JobDetailSideBar from "../../components/mnjuser/jobDetail/JobDetailSideBar";
import TopHeader from "../../components/navigation/TopHeader";
import { useGetJobDetailQuery } from "../../features/user/get/getJobDetailApiSlice";
import Container from "../../layout/Container";
import Loader from "../../components/loader/Loader";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const { data, isLoading, isSuccess } = useGetJobDetailQuery({ id: jobId });

  if (!data && isLoading && !isSuccess) return <Loader />

  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      {/* <Conta className="max-w-screen-xl mx-auto pb-10 flex justify-between"> */}
      <Container>
        <section className=" md:py-24 py-16">
          <div className="container mt-10">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <JobDetailMain job={data} />
              <JobDetailSideBar job={data} />
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default JobDetailsPage;
