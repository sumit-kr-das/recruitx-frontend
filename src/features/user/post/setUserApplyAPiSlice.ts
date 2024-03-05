import { apiSlice } from "../../../app/api/apiSlice";

export const setUserApplyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        setUserApply: builder.mutation({
            query: (id) => ({
                url: `/job/apply/${id}`,
                method: "POST",
                body: {},
            }),
            invalidatesTags: ["Apply"]
        }),
    }),
});

export const { useSetUserApplyMutation } = setUserApplyApiSlice;
