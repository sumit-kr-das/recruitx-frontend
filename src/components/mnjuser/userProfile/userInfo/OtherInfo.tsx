import React, { useState } from "react";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { languageData } from "../../../../constants/languageData";
import { qualificationData } from "../../../../constants/qualificationData";
import { tagsData } from "../../../../constants/tagsData";
import { useSetUserMutation } from "../../../../features/user/userInfo/setUserInfoDataApiSlice";
import { toast } from "react-hot-toast";
import { useUserInfoDataQuery } from "../../../../features/user/userInfo/getUserInfoDataApiSlice";
import SetUserInfo from "./SetUserInfo";
import ViewInfo from "./ViewInfo";

export const INITIAL_DATA = {
	github: "",
	linkedIn: "",
	dateOfBirth: "",
	age: "",
	address: "",
	bio: "",
	objective: "",
	language: [""],
	gender: "",
	skills: [""],
	maxQualification: "",
};

const OtherInfo = () => {
	const [userData, setUserData] = useState(INITIAL_DATA);
	const [lang, setLang] = useState([languageData[0]]);
	const [tags, setTags] = useState([tagsData[0]]);

	const { data, isSuccess, isLoading, isError } = useUserInfoDataQuery();

	if (isSuccess) {
		console.log(data);
	}
	const otherInfo = (
		<>
			{data?.length !== 0 ? (
				<ViewInfo
					data={data}
					isSuccess={isSuccess}
					setUserData={setUserData}
					userData={userData}
					tags={tags}
					setTags={setTags}
					lang={lang}
					setLang={setLang}
				/>
			) : (
				<SetUserInfo
					userData={userData}
					setUserData={setUserData}
					lang={lang}
					setLang={setLang}
					tags={tags}
					setTags={setTags}
				/>
			)}
		</>
	);

	return isLoading ? (
		<>
			<p>Loading...</p>
		</>
	) : isSuccess ? (
		otherInfo
	) : (
		<>
			<p>Error</p>
		</>
	);
};

export default OtherInfo;