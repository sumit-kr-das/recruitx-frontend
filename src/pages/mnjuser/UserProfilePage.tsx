import Footer from "../../components/footer/Footer";
import BasicInfo from "../../components/mnjuser/userProfile/BasicInfo";
import OtherInfo from "../../components/mnjuser/userProfile/userInfo/OtherInfo";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";

const UserProfilePage = () => {
	// const { data, isLoading } = useViewUserProfileQuery();
	// console.log(data);

	return (
		<div className="bg-green-50">
			<TopHeader />
			<Container className="pt-24 w-full">
				{/* Basic info */}
				<BasicInfo />
				{/* Other info */}
				<OtherInfo />
			</Container>
			<Footer />
		</div>
	);
};

export default UserProfilePage;
