import { apiSlice } from "../../../app/api/apiSlice";

export const approveApplyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        approveApply: builder.mutation({
            query: (id) => ({
                url: `/job/apply/approve/${id}`,
                method: "PUT",
                body: {},
            }),
            invalidatesTags: ["ApproveCandidate"],
        }),
    }),
});

export const { useApproveApplyMutation } = approveApplyApiSlice;
