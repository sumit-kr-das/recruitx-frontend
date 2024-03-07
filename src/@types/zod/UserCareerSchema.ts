import * as z from "zod";

const UserCareerSchema = z.object({
    industry: z.string().min(1, {
        message: "Please select industry"
    }),
    role: z.string().min(1, {
        message: "Please select role"
    }),
    jobRole: z.string().min(1, {
        message: "Please select job role"
    }),
    jobType: z.string().min(1, {
        message: "Please select job type"
    }),
    employmentType: z.string().min(1, {
        message: "Please select employeement type"
    }),
    skills: z.array(z.string()),
    expectedSalary: z.string().min(1, {
        message: "Please enter expected salary"
    })
});

export default UserCareerSchema;