import { apiSlice } from "../../app/api/apiSlice";

export const viewCompanyApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewCompany: builder.query({
			query: () => "/company/view",
		}),
	}),
});

export const { useViewCompanyQuery } = viewCompanyApiSlice;