import Footer from "../../components/footer/Footer";
import UserNotices from "../../components/mnjuser/UserNotices";
import UserProfile from "../../components/mnjuser/UserProfile";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import AppliedJob from "../../components/mnjuser/AppliedJob";
import { useViewAppliedJobsQuery } from "../../features/user/get/viewAppliedJobs";
import Loader from "../../components/loader/Loader";

const ViewAppliedPage = () => {
  const { data, isLoading } = useViewAppliedJobsQuery();

  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      <Container className="flex justify-between">
        <section className="bg-white border rounded-md w-[240px] h-fit mt-24">
          <UserProfile />
        </section>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="flex-1 h-fit mt-24 px-4 w-7/12">
            {data?.map((item, index) => (
              <AppliedJob job={item} key={index} />
            ))}
          </section>
        )}
        <section className="w-[240px] mt-24">
          <UserNotices />
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default ViewAppliedPage;
