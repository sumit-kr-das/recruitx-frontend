import Footer from "../../components/footer/Footer";
import BasicInfo from "../../components/mnjuser/userProfile/BasicInfo";
import UserEducation from "../../components/mnjuser/userProfile/userEducation/UserEducation";
import OtherInfo from "../../components/mnjuser/userProfile/userInfo/OtherInfo";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";

const UserProfilePage = () => {
	return (
		<div className="bg-green-50">
			<TopHeader />
			<Container className="pt-24 w-full">
				{/* Basic info */}
				<BasicInfo />
				{/* Other info */}
				<OtherInfo />
				{/* Educational details */}
				<UserEducation />
			</Container>
			<Footer />
		</div>
	);
};

export default UserProfilePage;
