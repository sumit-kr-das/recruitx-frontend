export interface UserAllInfo {
    name: string,
    email: string,
    phoneNo: string,
    workStatus: string,
    status: string,
    info: {
        userId: string,
        github: string,
        linkedIn: string,
        dateOfBirth: string,
        age: number,
        address: string,
        bio: string,
        objective: string,
        language: string[],
        gender: string,
        skills: string[],
        photo: string,
        maxQualification: string,
    },
    carrer: [
        {
            userId: string,
            industry: string,
            role: string,
            jobRole: string,
            jobType: string,
            employmentType: string,
            skills: string[],
            expectedSalary: number,
            __v: number
        }
    ],
    certificate?: [
        {
            userId: string,
            title: string,
            source: string,
            description: string,
            startDate: string,
            endDate?: string
        }
    ],
    education?: [
        {
            userId: string,
            degree: string,
            college: string,
            course: string,
            courseType: string,
            admissionYear: number,
            passYear: number,
            marks: number,
            createdAt?: string,
            updatedAt?: string
        }
    ],
    exprience?: [
        {
            userId: string,
            skills: string[],
            companyName: string,
            designation: string,
            exprience: number,
            type: string,
            startDate?: string,
            endDate?: string,
            jobProfile: string,
            createdAt: string,
            updatedAt?: string
        }
    ],
    project?: [
        {
            userId: string,
            name: string,
            description: string,
            skills: string[],
            startDate: string,
            endDate?: string,
            associate: string
        }
    ]
}
