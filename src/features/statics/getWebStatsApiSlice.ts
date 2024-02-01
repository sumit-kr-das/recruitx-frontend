import { TWebStats } from "../../@types/publicTypes/TWebStats";
import { apiSlice } from "../../app/api/apiSlice";

export const getWebStatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWebStats: builder.query<TWebStats, void>({
      query: () => "/user/stats",
    }),
  }),
});

export const { useGetWebStatsQuery } = getWebStatsApiSlice;
