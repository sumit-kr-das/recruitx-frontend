import { apiSlice } from "../../app/api/apiSlice"; 

export const updateCompanyApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		updateCompany: builder.mutation({
			query: (credentials) => ({
				url: "/company/edit",
				method: "PUT",
				body: { ...credentials },
			}),
            invalidatesTags: ['CompanyProfile']
		}),
	}),
});

export const { useUpdateCompanyMutation } = updateCompanyApiSlice;
