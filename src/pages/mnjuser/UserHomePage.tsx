import Footer from "../../components/footer/Footer";
import HomeFeed from "../../components/mnjuser/userHome/homeFeed/HomeFeed";
import UserProfile from "../../components/mnjuser/UserProfile";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";

const UserHomePage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      <Container className="flex justify-between">
        <section className="bg-white border rounded-lg w-[20%] h-fit mt-28">
          <UserProfile />
        </section>
        <section className="w-[80%] h-fit mt-24">
          <HomeFeed />
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default UserHomePage;
