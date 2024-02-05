import { apiSlice } from "../../../app/api/apiSlice";
import { FormValue } from "../../../components/mnjuser/userProfile/userInfo/OtherInfo";


export const getUserInfoDataApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		userInfoData: builder.query<FormValue[], void>({
			query: () => "/user/info/view",
			providesTags: ["UserInfo"],
		}),
	}),
});

export const { useUserInfoDataQuery } = getUserInfoDataApiSlice;
