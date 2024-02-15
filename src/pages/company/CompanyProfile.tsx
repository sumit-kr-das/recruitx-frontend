import ApproveAlert from "../../components/recruit/ApproveAlert";
import CompanyInfo from "../../components/recruit/companyProfile/CompanyInfo";
import CompanyProfileDetails from "../../components/recruit/companyProfile/companyProfileDetails/CompanyProfileDetails";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";

const CompanyProfile = () => {
	return (
		<Container>
			<ApproveAlert />
			<TitleBar title="View Profile" path="Employer / Dashboard / My Profile" />
			{/* user profile details */}
			{/* <CompanyInfo /> */}
			{/* other details */}
			<CompanyProfileDetails />
		</Container>
	);
};

export default CompanyProfile;
