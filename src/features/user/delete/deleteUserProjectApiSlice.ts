import { apiSlice } from "../../../app/api/apiSlice";

export const deleteUserProjectApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteUserProject: builder.mutation({
            query: (id) => ({
                url: `/user/project/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["UserProject"]
        })
    })
})

export const { useDeleteUserProjectMutation } = deleteUserProjectApiSlice;