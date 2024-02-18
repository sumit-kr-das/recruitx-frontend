import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import ApproveAlert from "../../components/recruit/ApproveAlert";
import JobChart from "../../components/chart/JobChart";
import DashboardStats from "../../components/chart/DashboardStats";

const CompanyDashboard = () => {

	return (
		<Container>
			<ApproveAlert />
			<TitleBar
				title="Company Dashboard"
				path="Employer / Dashboard / Employer Dashboard"
			/>
			<DashboardStats />
			<div className="flex gap-5">
				<JobChart />
			</div>
		</Container>
	);
};

export default CompanyDashboard;
