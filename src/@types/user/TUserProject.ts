export type TUserProject = {
    _id: string,
    name: string,
    description: string,
    skills: string[],
    startDate: string,
    endDate?: string,
    associate: string
}