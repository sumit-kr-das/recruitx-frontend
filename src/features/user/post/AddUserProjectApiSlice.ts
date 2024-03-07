import { apiSlice } from "../../../app/api/apiSlice";

export const AddUserProjectApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addUserProject: builder.mutation({
            query: (credential) => ({
                url: "/user/project/add",
                method: "POST",
                body: { ...credential }
            }),
            invalidatesTags: ["UserProject"]
        })
    })
})

export const { useAddUserProjectMutation } = AddUserProjectApiSlice;