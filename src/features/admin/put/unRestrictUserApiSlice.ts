import { apiSlice } from "../../../app/api/apiSlice";

export const unRestrictUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        unRestrictUser: builder.mutation({
            query: (id) => ({
                url: `/admin/user/unrestrict/${id}`,
                method: "PUT"
            }),
            invalidatesTags: ["Users"]
        })
    })
})

export const { useUnRestrictUserMutation } = unRestrictUserApiSlice;