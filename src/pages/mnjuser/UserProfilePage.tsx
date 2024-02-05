import { useState } from "react";
import Footer from "../../components/footer/Footer";
import BasicInfo from "./_components/BasicInfo";
import UserCareer from "../../components/mnjuser/userProfile/userCareer/UserCareer";
import UserEducation from "./_components/UserEducation";
import OtherInfo from "./_components/OtherInfo";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";

const UserProfilePage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      <Container className="pt-24 w-full">
        {/* Basic info */}
        <BasicInfo />
        {/* Other info */}
        <OtherInfo />
        {/* Educational details */}
        <UserEducation />
        {/* Career details */}
        {/* <UserCareer /> */}
      </Container>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
