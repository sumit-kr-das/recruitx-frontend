import { apiSlice } from "../../../app/api/apiSlice";

interface userInfo {
	userId: string;
	phone: string;
	github: string;
	linkedIn?: string;
	dateOfBirth: string;
	age: number;
	address: string;
	bio: string;
	objective: string;
	status: string;
	language: [string];
	gender: string;
	skills: [string];
	photo: string;
	maxQualification: string;
}

export const getUserInfoDataApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		userInfoData: builder.query<userInfo[], void>({
			query: () => "/user/info/view",
			providesTags: ["UserInfoData"],
		}),
	}),
});

export const { useUserInfoDataQuery } = getUserInfoDataApiSlice;
