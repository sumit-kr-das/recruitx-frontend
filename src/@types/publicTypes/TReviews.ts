export type TReviews = {
    companyId: string,
    createdAt: string,
    description: string,
    rating: number,
    updatedAt: string,
    userId: {
        name: string,
        _id: string
    }
}