export type TApprovedCompanies = {
    _id: string,
    name: string,
    email: string,
    phone: number,
    companyName: string,
    industry: string,
    pin: string,
    address: string,
    role: string,
    status: string,
    createdAt: string,
    updatedAt?: string,
    designation?: string,
    __v: number,
    companyProfileId: {
        _id: string,
        logo: string
    }
}