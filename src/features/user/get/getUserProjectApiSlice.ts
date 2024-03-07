import { apiSlice } from "../../../app/api/apiSlice";

export const getUserProjectApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserProject: builder.query({
            query: () => "/user/project/view",
            providesTags: ["UserProject"]
        })
    })
})

export const { useGetUserProjectQuery } = getUserProjectApiSlice;