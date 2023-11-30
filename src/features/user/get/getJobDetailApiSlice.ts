import { apiSlice } from "../../../app/api/apiSlice";

export const getJobDetailApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobDetail: builder.query({
            query: ({ id }) => `/job/details/${id}`,
        }),
    }),
});

export const { useGetJobDetailQuery } = getJobDetailApiSlice;