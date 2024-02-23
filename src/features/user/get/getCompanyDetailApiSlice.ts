import { apiSlice } from "../../../app/api/apiSlice";

export const getCompanyDetailApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompanyDetail: builder.query({
            query: ({ id }) => `/company/details/${id}`,
            providesTags: ["Company", "CompanyProfileDetails"],
        })
    })
});

export const { useGetCompanyDetailQuery } = getCompanyDetailApiSlice;