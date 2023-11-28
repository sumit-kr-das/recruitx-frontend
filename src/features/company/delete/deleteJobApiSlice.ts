import { apiSlice } from "../../../app/api/apiSlice";

export const deleteJobApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/job/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CompanyJobs"],
    }),
  }),
});

export const { useDeleteJobMutation } = deleteJobApiSlice;
