import { apiSlice } from "../../app/api/apiSlice"; 

export const updateCompanyProfileDetailsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		updateCompanyProfile: builder.mutation({
			query: (credentials) => ({
				url: "/company/profile/edit",
				method: "PUT",
				body: { ...credentials },
			}),
            invalidatesTags: ['CompanyProfileDetails']
		}),
	}),
});

export const { useUpdateCompanyProfileMutation } = updateCompanyProfileDetailsApiSlice;
