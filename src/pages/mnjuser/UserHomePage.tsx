import Footer from "../../components/footer/Footer";
import HomeFeed from "../../components/mnjuser/userHome/homeFeed/HomeFeed";
import UserNotices from "../../components/mnjuser/UserNotices";
import UserProfile from "../../components/mnjuser/UserProfile";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";

const UserHomePage = () => {
  return (
    <div className="bg-green-50">
      <TopHeader />
      <Container className="flex justify-between">
        <section className="bg-white border rounded-md w-[240px] h-fit mt-24">
          <UserProfile />
        </section>
        <section className="flex-1 h-fit mt-24">
          <HomeFeed />
        </section>
        <section className="w-[240px] mt-24">
          <UserNotices />
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default UserHomePage;
