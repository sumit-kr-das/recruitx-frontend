import { apiSlice } from "../../../app/api/apiSlice";

export const viewApplicantApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewApplicant: builder.query({
            query: (id) => `/job/application/view/${id}`,
            providesTags: ["ApproveCandidate"],
        }),
    }),
});

export const { useViewApplicantQuery } = viewApplicantApiSlice;