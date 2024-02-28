import { apiSlice } from "../../../app/api/apiSlice";

export const getReviewApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        reviewsData: builder.query({
            query: (companyId) => ({
                url: `/company/rating/view/${companyId}`,
            })
        })
    })
})

export const { useReviewsDataQuery } = getReviewApiSlice;