import { apiSlice } from "../../../app/api/apiSlice";

export const getJobRecomendationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobRecomandation: builder.query({
            query: ({ hasInfo, limit }) => `/job/recommandtions?limit=${limit}&hasInfo=${hasInfo}`,
            providesTags: ["User"],
        }),
    }),
});

export const { useGetJobRecomandationQuery } = getJobRecomendationApiSlice;
