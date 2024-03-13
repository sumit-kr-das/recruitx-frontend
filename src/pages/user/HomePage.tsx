import Footer from "../../components/footer/Footer";
import Search from "../../components/mnjuser/userHome/search/Search";
import TopHeader from "../../components/navigation/TopHeader";
import Categories from "../../components/user/Categories";
import Steps from "../../components/user/Steps";
import UserHero from "../../components/user/UserHero";
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
          <div>
              <div className="mx-auto max-w-xl text-center mt-20 mb-10">
                  <h1 className="text-2xl md:text-4xl font-extrabold">
                      Get Hired in <span className="text-cyan-500">4 Quick Easy Steps</span>
                  </h1>
                  <p className="mt-4 sm:text-xl/relaxed">The quickest and most effective way to get hired by the top firm working in your career interest areas.</p>
              </div>
              <Steps/>
          </div>
          <PublicJobs/>
          <PublicCompanies/>
          <PublicStats/>
      </Container>
        <Footer/>
    </div>
  );
};

export default HomePage;
