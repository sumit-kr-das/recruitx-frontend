import { apiSlice } from "../../../app/api/apiSlice";

export const viewShortlistedApplicantApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewShortlistedApplicants: builder.query({
            query: (id) => `/job/apply/shortlisted/view/${id}`,
            providesTags: ["Company"],
        }),
    }),
});

export const { useViewShortlistedApplicantsQuery } = viewShortlistedApplicantApiSlice;