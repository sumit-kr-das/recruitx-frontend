import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import BasicInfo from "./_components/BasicInfo";
import OtherInfo from "./_components/OtherInfo";
// import UserCareer from "./_components/UserCareer";
import UserEducation from "./_components/UserEducation";
import UserCareer from "./_components/UserCareer";
import UserExprience from "./_components/UserExprience";

const UserProfilePage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      <Container className="pt-24 w-full">
        <BasicInfo />
        <OtherInfo />
        <UserEducation />
        <UserCareer />
        <UserExprience />
        {/* <UserCareer /> */}
      </Container>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
