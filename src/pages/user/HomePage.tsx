import Footer from "../../components/footer/Footer";
import Search from "../../components/mnjuser/userHome/search/Search";
import TopHeader from "../../components/navigation/TopHeader";
import Categories from "../../components/user/Categories";
import Steps from "../../components/user/Steps";
import UserHero from "../../components/user/UserHero";
import UserTitleWrapper from "../../components/user/UserTitleWrapper";
import Container from "../../layout/Container";
import PublicCompanies from "./_components/PublicCompanies";
import PublicJobs from "./_components/PublicJobs";
import PublicStats from "./_components/PublicStats";

const HomePage = () => {
  return (
    <div className="bg-[#FAFAFA] relative z-10">
      <TopHeader />
      <Container className="pt-32 ">
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
        <PublicJobs />
        <PublicCompanies />
        <PublicStats />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
