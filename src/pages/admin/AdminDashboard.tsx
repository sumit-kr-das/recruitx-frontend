import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import DashboardStats from "../../components/chart/DashboardStats";
import JobChart from "../../components/chart/JobChart";
const AdminDashboard = () => {

  return (
    <Container>
      <TitleBar
        title="Admin Dashboard"
        path="Admin / Dashboard / Admin Dashboard"
      />
      {/* stats */}
      <DashboardStats />
      {/* charts */}
      <div className="flex gap-5">
        <JobChart />
      </div>
    </Container>
  );
};

export default AdminDashboard;
