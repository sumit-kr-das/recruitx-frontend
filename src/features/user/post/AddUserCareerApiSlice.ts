import { apiSlice } from "../../../app/api/apiSlice";

export const addUserCareerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        setUserCareer: builder.mutation({
            query: (credentials) => ({
                url: "/user/carrer/add",
                method: "POST",
                body: { ...credentials }
            }),
            invalidatesTags: ["UserCareer"]
        })
    })
})

export const { useSetUserCareerMutation } = addUserCareerApiSlice;