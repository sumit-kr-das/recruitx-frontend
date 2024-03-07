import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserProjectApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUserProject: builder.mutation({
            query: ({ id, val }) => ({
                url: `/user/project/update/${id}`,
                method: "POST",
                body: val,
            }),
            invalidatesTags: ["UserProject"]
        })
    })
})

export const { useUpdateUserProjectMutation } = updateUserProjectApiSlice