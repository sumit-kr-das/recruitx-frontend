import Footer from "../../components/footer/Footer";
import UserNotices from "../../components/mnjuser/UserNotices";
import UserProfile from "../../components/mnjuser/UserProfile";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import AppliedJob from "../../components/mnjuser/AppliedJob";
import { useViewAppliedJobsQuery } from "../../features/user/get/viewAppliedJobs";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";

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
            {data?.length ? (
              <>
                {data?.map((item, index) => (
                  <AppliedJob job={item} key={index} />
                ))}
              </>
            ) : (
              <div className="h-fit pt-32 flex items-center justify-center">
                <p>
                  No job found{" "}
                  <Link to="/mnjuser/jobs" className="text-blue-600">
                    apply now
                  </Link>
                </p>
              </div>
            )}
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
