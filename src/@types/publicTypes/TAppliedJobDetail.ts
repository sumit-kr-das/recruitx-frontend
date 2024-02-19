export type TAppliedJobDetail = {
    _id: string,
    jobId: {
        companyId: {
            _id: string,
            companyName: string,
            companyProfileId: {
                _id: string,
                logo: string
            }
        },
        info: {
            vacancies: number,
            jobType: string,
            workplaceType: string,
            startDate: string,
            endDate: string,
            roles: string,
            skills: string[],
            minExprience: number,
            maxExprience?: number,
            location?: string,
            maxQualification?: string,
            degree: string,
            maxSalary?: number,
            minSalary?: number,

        },
        _id: string,
        title: string,
        category: string,
        description: string,
        tags: string[],
        active: string,
        createdAt: string,
        updatedAt: string,
        __v: number
    },
    selected: boolean,
    createdAt: string,
    updated: string,
    __v: number
}