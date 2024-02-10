import * as z from "zod";

const CompanyUpdateSchema = z.object({
    companyName: z.string().min(1, {
        message: "Please enter company name"
    }),
    address: z.string().min(1, {
        message: "Please enter company address"
    }),
    designation: z.string().min(1, {
        message: "Please enter company designation"
    }),
    email: z.string().email().min(1, {
        message: "Please enter company email"
    }),
    industry: z.string().min(1, {
        message: "Please enter industry"
    }),
    name: z.string().min(1, {
        message: "Please enter name"
    }),
    phone: z.string().min(10, {
        message: "Please enter phone no"
    }),
    pin: z.string().min(6, {
        message: "Please enter valid pin code"
    })
})

export default CompanyUpdateSchema;