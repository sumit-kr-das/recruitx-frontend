export type TCompanyDetails = {
    name: string,
    email: string,
    phone: string,
    companyName: string,
    designation: string,
    industry: string,
    pin: string,
    address: string,
    profile: [
        {
            companyId: string,
            logo: string,
            description: string,
            teamSize: number,
            type: string,
            tags: string[],
            founded: string
        }
    ]
}