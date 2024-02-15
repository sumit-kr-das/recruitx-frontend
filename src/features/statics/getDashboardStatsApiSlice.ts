import { apiSlice } from "../../app/api/apiSlice";

export const getDashboardStatsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: ({ role }) => `/company/stats/${role}`,
            providesTags: ["CompanyStats"]
        })
    })
});

export const { useGetDashboardStatsQuery } = getDashboardStatsApiSlice;