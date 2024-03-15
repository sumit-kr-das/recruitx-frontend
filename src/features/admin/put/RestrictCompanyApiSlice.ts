import { apiSlice } from "../../../app/api/apiSlice";

export const restrictCompanyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        restrictCompany: builder.mutation({
            query: (id) => ({
                url: `/admin/restrict/company/${id}`,
                method: "PUT"
            }),
            invalidatesTags: ["ApproveCompany"]
        }),
    }),
});

export const { useRestrictCompanyMutation } = restrictCompanyApiSlice;