import * as z from "zod";

const UserProjectSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    description: z.string().min(20, {
        message: "Description should be minimum 20 characters"
    }),
    skills: z.array(z.string()),
    startDate: z.string().min(1, {
        message: "Start date is required"
    }),
    endDate: z.string(),
    associate: z.string().min(1, {
        message: "Associate is required"
    })
})

export default UserProjectSchema;