import { apiSlice } from "../../app/api/apiSlice";

export const forgetPasswordOtpApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        forgetPasswordOtp: builder.mutation({
            query: (credentials) => ({
                url: "/forget/password/otpsend",
                method: "POST",
                body: { ...credentials }
            })
        })
    })
});

export const { useForgetPasswordOtpMutation } = forgetPasswordOtpApiSlice;