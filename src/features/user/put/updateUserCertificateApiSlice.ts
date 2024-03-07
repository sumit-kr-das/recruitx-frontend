import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserCertificateApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUserCertificate: builder.mutation({
            query: ({ id, val }) => ({
                url: `/user/certificate/edit/${id}`,
                method: "PUT",
                body: val
            }),
            invalidatesTags: ["UserCertificate"]
        })
    })
})

export const { useUpdateUserCertificateMutation } = updateUserCertificateApiSlice;