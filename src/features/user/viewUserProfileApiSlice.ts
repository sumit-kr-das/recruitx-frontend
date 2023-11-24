import { apiSlice } from "../../app/api/apiSlice";

export const viewUserProfileApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewUserProfile: builder.query({
			query: () => "/user/view",
		}),
	}),
});

export const { useViewUserProfileQuery } = viewUserProfileApiSlice;
