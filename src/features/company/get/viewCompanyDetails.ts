import { apiSlice } from "../../../app/api/apiSlice";

export const viewCompanyDetailsApiDetails = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewCompanyDetails: builder.query({
            query: ({ id }) => `/company/info/all/view?id=${id}`,
            providesTags: ["CompanyProfileDetails"]
        }),
    }),
});

export const { useViewCompanyDetailsQuery } = viewCompanyDetailsApiDetails;