import * as z from "zod";

const UserCertificateSchema = z.object({
    title: z.string().min(1, {
        message: "Course title required"
    }),
    source: z.string().min(1, {
        message: "Source is required"
    }),
    description: z.string().min(10, {
        message: "Description is required"
    }),
    startDate: z.string().min(1, {
        message: "Start date required"
    }),
    endDate: z.string()
});

export default UserCertificateSchema