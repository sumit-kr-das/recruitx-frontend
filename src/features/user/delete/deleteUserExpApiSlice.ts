import { apiSlice } from "../../../app/api/apiSlice";

export const deleteUserExpApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteUserExp: builder.mutation({
            query: (id) => ({
                url: `/user/exprience/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["UserExp"]
        })
    })
})

export const { useDeleteUserExpMutation } = deleteUserExpApiSlice