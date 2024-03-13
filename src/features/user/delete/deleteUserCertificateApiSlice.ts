import { apiSlice } from "../../../app/api/apiSlice";

export const deleteUserCertificateApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteUserCertificate: builder.mutation({
      query: (id) => ({
        url: `/user/certificate/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UserCertificate", "UserAllInfo"],
    }),
  }),
});

export const { useDeleteUserCertificateMutation } =
  deleteUserCertificateApiSlice;
