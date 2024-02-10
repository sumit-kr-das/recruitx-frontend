import { apiSlice } from "../../../app/api/apiSlice";

export const updateJobApliSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateJob: builder.mutation({
            query: ({ id, credentials }) => ({
                url: `job/edit/${id}`,
                method: "PUT",
                body:  credentials 
            }),
            invalidatesTags: ["CompanyJobs"]
        })
    })
});
// export const { useUpdateCompanyProfileMutation } =
//   updateCompanyProfileDetailsApiSlice;

export const { useUpdateJobMutation } = updateJobApliSlice;
