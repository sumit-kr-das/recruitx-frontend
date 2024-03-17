import { apiSlice } from "../../../app/api/apiSlice";

export const changePasswordApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        changeAdminPass: builder.mutation({
            query: (credentials) => ({
                url: "/admin/password/change",
                method: "PUT",
                body: { ...credentials },
            }),
        }),
    })
});

export const { useChangeAdminPassMutation } = changePasswordApiSlice;