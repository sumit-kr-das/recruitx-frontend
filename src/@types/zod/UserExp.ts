import * as z from "zod";

const UserExpSchema = z.object({
    companyName: z.string().min(1, {
        message: "Company name is required"
    }),
    designation: z.string().min(1, {
        message: "Designation is required"
    }),
    experience: z.string().min(1, {
        message: "Experience is required"
    }),
    type: z.string().min(1, {
        message: "Please select job type"
    }),
    startDate: z.string().min(1, {
        message: "Start date required"
    }),
    endDate: z.string().min(1, {
        message: "End date required"
    }),
    jobProfile: z.string().min(1, {
        message: "Job profile added"
    }),
    skills: z.array(z.string())
});

export default UserExpSchema;