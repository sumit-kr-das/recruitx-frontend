import { TUsers } from "../../../@types/admin/TUsers";
import { apiSlice } from "../../../app/api/apiSlice";

export const viewRestrictUserApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewRestrictUser: builder.query<TUsers[], void>({
            query: () => `/admin/user/restrict/view`,
            providesTags: ["Users"]
        })
    })
});

export const { useViewRestrictUserQuery } = viewRestrictUserApiSlice;