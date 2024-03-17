import { TUsers } from "../../../@types/admin/TUsers";
import { apiSlice } from "../../../app/api/apiSlice";

export const viewAllUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewAllUser: builder.query<TUsers[], void>({
            query: () => `/user/view/all`,
            providesTags: ["Users"]
        })
    })
});

export const { useViewAllUserQuery } = viewAllUserApiSlice;