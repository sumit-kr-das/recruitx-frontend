import { apiSlice } from "../../../app/api/apiSlice";

export const viewApplicantStatsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewApplicantStats: builder.query({
            query: (id) => `/job/applications/manage/${id}`,
            providesTags: ["Company"],
        }),
    }),
});

export const { useViewApplicantStatsQuery } = viewApplicantStatsApiSlice;