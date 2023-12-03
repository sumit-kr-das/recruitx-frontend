import { apiSlice } from "../../../app/api/apiSlice";

export const deleteApplicantApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteApplicant: builder.mutation({
            query: (params) => ({
                url: `/job/apply/cancel/${params.id}/${params.userId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["ApproveCandidate"],
        }),
    }),
});

export const { useDeleteApplicantMutation } = deleteApplicantApiSlice;
