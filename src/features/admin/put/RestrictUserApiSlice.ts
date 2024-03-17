import { apiSlice } from "../../../app/api/apiSlice";

export const restrictUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        restrictUser: builder.mutation({
            query: (id) => ({
                url: `/admin/restrict/user/${id}`,
                method: "PUT"
            }),
            invalidatesTags: ["Users"]
        }),
    }),
});

export const { useRestrictUserMutation } = restrictUserApiSlice;