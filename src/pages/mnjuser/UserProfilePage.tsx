import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import UserDefault from "../../assets/user-default-profile.png";
import { useViewUserProfileQuery } from "../../features/user/userProfile/viewUserProfileApiSlice";
import { convertDate } from "../company/MyJobs";
import { Phone, Mail } from "lucide-react";
import BasicInfo from "../../components/mnjuser/userProfile/BasicInfo";

const UserProfilePage = () => {
	// const { data, isLoading } = useViewUserProfileQuery();
	// console.log(data);

	return (
		<div className="bg-green-50">
			<TopHeader />
			<Container className="pt-24 w-full">
				{/* Basic info */}
				<BasicInfo />
			</Container>
			<Footer />
		</div>
	);
};

export default UserProfilePage;
