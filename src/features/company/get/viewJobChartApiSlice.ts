import { apiSlice } from "../../../app/api/apiSlice";

export const viewJobChartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewJobChart: builder.query({
            query: ({ role }) => `/chart/job/${role}`,
            providesTags: [ "JobChart"]
        })
    })
});

export const { useViewJobChartQuery } = viewJobChartApiSlice;