import * as z from "zod";

const CompanyProfileUpdateSchema = z.object({
    description: z.string().min(100, {
        message: "Description should be minimum 100 characters"
    }),
    type: z.string().min(1, {
        message: "Please select company type"
    }),
    tags: z.array(z.string().min(1, {
        message: "Please select tag"
    })),
    teamSize: z.string().min(1, {
        message: "Please enter team size"
    }),
    founded: z.string().min(1, {
        message: "Please enter founding year"
    })
})

export default CompanyProfileUpdateSchema;