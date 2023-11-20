import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { Pencil, Trash2 } from "lucide-react";

const MyJobs = () => {
	return (
		<Container>
			<TitleBar title="Manage jobs" path="Employer / Dashboard / My Jobs" />
			<div className="">
				<div className="flex items-center gap-x-5">
					<button>All: 122</button>
					<button>Active: 24</button>
					<button>Expired: 57</button>
				</div>
				<div>
					{[...Array(5)].map((_, index) => (
						<div key={index} className="flex items-center justify-between p-4 mt-5 rounded-lg border bg-cyan-100 gap-2">
							<div>
								<p>Tripadvisor</p>
								<h2>Technical Content Writer</h2>
							</div>
							<div>
								<p>244 Applicants</p>
							</div>
							<div>
								<p>Posted:17 Apr 2023</p>
								<p>Expired:12 Jun 2024</p>
							</div>
							<div className="flex items-center gap-x-5">
								<Pencil />
								<Trash2 />
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

export default MyJobs;
