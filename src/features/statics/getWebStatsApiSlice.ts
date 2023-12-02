import { apiSlice } from "../../app/api/apiSlice";

export const getWebStatsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWebStats: builder.query({
            query: () => "/user/stats",
        }),
    }),
});

export const { useGetWebStatsQuery } = getWebStatsApiSlice;
