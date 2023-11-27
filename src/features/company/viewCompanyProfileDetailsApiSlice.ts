import { apiSlice } from "../../app/api/apiSlice";

export const viewCompanyProfileDetailsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewCompanyProfile: builder.query({
			query: () => "/company/profile/view",
			providesTags: ["CompanyProfileDetails"],
		}),
	}),
});

export const { useViewCompanyProfileQuery } = viewCompanyProfileDetailsApiSlice;
