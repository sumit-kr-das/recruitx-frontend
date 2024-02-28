import { apiSlice } from "../../../app/api/apiSlice";

export const getReviewApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        reviewsData: builder.query({
            query: (companyId) =>
                `/company/rating/view/${companyId}`,
            providesTags: ["Review"],
        })
    })
})

export const { useReviewsDataQuery } = getReviewApiSlice;