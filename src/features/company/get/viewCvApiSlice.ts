import { apiSlice } from "../../../app/api/apiSlice";

export const viewCvApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewCv: builder.query({
            query: (id) => `/user/all/info/view?id=${id}`,
            providesTags: ["CompanyJobs"],
        }),
    }),
});

export const { useViewCvQuery } = viewCvApiSlice;
