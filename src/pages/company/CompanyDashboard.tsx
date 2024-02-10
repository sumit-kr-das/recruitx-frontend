import { Bookmark, Briefcase, MessageCircle, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { chartData1, chartData2 } from "../../constants/chartData";
import Container from "../../layout/Container";
import { Card } from "../../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../../ui/alert";

const CompanyDashboard = () => {
	const [areaChart, setAresChart] = useState(chartData1);
	const [donutChart, setDonutChart] = useState(chartData2);


	return (
		<Container>
			<TitleBar
				title="Company Dashboard"
				path="Employer / Dashboard / Employer Dashboard"
			/>
			{/* stats */}
			<div className="flex justify-between flex-wrap">
				<Card className="flex items-center gap-10 p-8">
					<div className="bg-green-100 p-5 rounded-full">
						<Briefcase className="text-green-500" />
					</div>
					<div>
						<h1 className="text-3xl font-bold text-right">76</h1>
						<p className="mt-2 text-slate-500">Posted jobs</p>
					</div>
				</Card>
				<Card className="flex items-center gap-10 p-8">
					<div className="bg-yellow-100 p-5 rounded-full">
						<Bookmark className="text-yellow-500" />
					</div>
					<div>
						<h1 className="text-3xl font-bold text-right">22</h1>
						<p className="mt-2 text-slate-500">Saved Candidates</p>
					</div>
				</Card>
				<Card className="flex items-center gap-10 p-8">
					<div className="bg-red-100 p-5 rounded-full">
						<UserCog className="text-red-500" />
					</div>
					<div>
						<h1 className="text-3xl font-bold text-right">42</h1>
						<p className="mt-2 text-slate-500">Applicants</p>
					</div>
				</Card>
				<Card className="flex items-center gap-10 p-8">
					<div className="bg-blue-100 p-5 rounded-full">
						<MessageCircle className="text-blue-500" />
					</div>
					<div>
						<h1 className="text-3xl font-bold text-right">125</h1>
						<p className="mt-2 text-slate-500">Total Review</p>
					</div>
				</Card>
			</div>
			{/* charts */}
			<div className="flex gap-5">
				<Card className=" mt-5 w-3/5 p-5">
					<h2 className="font-bold text-lg mb-5">Overall Application Rate</h2>
					<ReactApexChart
						options={areaChart.options}
						series={areaChart.series}
						type="area"
						height={350}
					/>
				</Card>
				<Card className=" mt-5 w-2/6 p-5">
					<h2 className="font-bold text-lg mb-5">Traffic Source</h2>
					<ReactApexChart
						options={donutChart.options}
						series={donutChart.series}
						type="donut"
					/>
				</Card>
			</div>
		</Container>
	);
};

export default CompanyDashboard;
