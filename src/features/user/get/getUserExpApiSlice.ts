import { apiSlice } from "../../../app/api/apiSlice";

export const getUserExpApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserExp: builder.query({
            query: () => "/user/exprience/view",
            providesTags: ["UserExp"]
        })
    })
})

export const { useGetUserExpQuery } = getUserExpApiSlice;