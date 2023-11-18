import FroadSVG from "../../assets/icons/fraud_alert.png";

const UserNotices = () => {
	return (
		<div>
			{/* notice 1 */}
			<div className="bg-white border rounded-md p-4">
				<img
					src={FroadSVG}
					width={60}
					alt="user_default"
					className="rounded-full object-cover"
				/>
				<p className="font-bold">Never pay anyone to get a job</p>
				<p className="text-xs font-medium">
					Fraudsters may ask you to invest money either to earn more OR to get
					you a job. Never make such payments.
				</p>
			</div>
			{/* notice 2 */}
            {/* <div className="bg-white border rounded-md p-4 mt-4">
				<Image
					src={FroadSVG}
					width={60}
					alt="user_default"
					className="rounded-full object-cover"
				/>
				<p className="font-bold">Never pay anyone to get a job</p>
				<p className="text-xs font-medium">
					Fraudsters may ask you to invest money either to earn more OR to get
					you a job. Never make such payments.
				</p>
			</div> */}
		</div>
	);
};

export default UserNotices;
