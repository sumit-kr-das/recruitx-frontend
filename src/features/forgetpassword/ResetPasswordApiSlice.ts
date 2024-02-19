import { apiSlice } from "../../app/api/apiSlice";

export const resetPasswordApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        resetPassword: builder.mutation({
            query: (credentials) => ({
                url: "/forget/password/change",
                method: "PUT",
                body: { ...credentials }
            })
        })
    })
});

export const { useResetPasswordMutation } = resetPasswordApiSlice;