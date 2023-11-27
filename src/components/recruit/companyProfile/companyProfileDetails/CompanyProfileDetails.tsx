import { useState } from "react";
import { companyTagData } from "../../../../constants/companyTagsData";
import { useViewCompanyProfileQuery } from "../../../../features/company/viewCompanyProfileDetailsApiSlice";
import SetCompanyProfile from "./SetCompanyProfile";
import ViewCompanyProfile from "./ViewCompanyProfile";

export const INITIAL_DATA = {
	description: "",
	teamSize: "",
	founded: "",
	type: "",
	tags: "",
};

const CompanyProfileDetails = () => {
	const [userData, setUserData] = useState(INITIAL_DATA);
	const [cType, setCtype] = useState([companyTagData[0]]);
	const { data, isSuccess, isLoading } = useViewCompanyProfileQuery();
	console.log(data);
	const isAvailable = (
		<>
			{!data ? (
				<SetCompanyProfile
					userData={userData}
					setUserData={setUserData}
					cType={cType}
					setCtype={setCtype}
				/>
			) : (
				<ViewCompanyProfile
					data={data}
					userData={userData}
					setUserData={setUserData}
					isSuccess={isSuccess}
					cType={cType}
					setCtype={setCtype}
				/>
			)}
		</>
	);

	return isLoading ? <p>Loading...</p> : isSuccess && isAvailable;
};

export default CompanyProfileDetails;
