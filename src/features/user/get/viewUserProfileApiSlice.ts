import { apiSlice } from "../../../app/api/apiSlice";

export const viewUserProfileApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewUserProfile: builder.query({
			query: () => "/user/view",
			providesTags: ["User"],
		}),
	}),
});

export const { useViewUserProfileQuery } = viewUserProfileApiSlice;
