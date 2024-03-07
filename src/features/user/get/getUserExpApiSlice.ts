import { apiSlice } from "../../../app/api/apiSlice";
import { TUserExp } from "../../../@types/user/TUserExp";
export const getUserExpApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserExp: builder.query<TUserExp[], void>({
            query: () => "/user/exprience/view",
            providesTags: ["UserExp"]
        })
    })
})

export const { useGetUserExpQuery } = getUserExpApiSlice;