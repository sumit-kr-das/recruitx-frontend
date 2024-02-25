import { apiSlice } from "../../../app/api/apiSlice";

export const setReviewApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        setReview: builder.mutation({
            query: (credentials) => ({
                url: "/company/rating/add",
                method: "POST",
                body: { ...credentials },
            }),
            invalidatesTags: ["Review"]
        }),
    }),
});

export const { useSetReviewMutation } = setReviewApiSlice;