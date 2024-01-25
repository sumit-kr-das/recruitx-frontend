import * as z from "zod";

const CompanyRegisterSchema = z.object({
    name: z.string().min(4, {
        message: "Name must be at least 4 characters.",
    }),
    email: z.string().min(4, {
        message: "Email must be 4 characters"
    }).email("This is not a valid email"),
    password: z.string().min(4, {
        message: "Password should be minimum 4 digits"
    }),
    phone: z.string().min(10, {
        message: "phone must be 10 digits"
    }).max(10, {
        message: "Phone must be 10 digits"
    }),
    companyName: z.string({
        required_error: "Please enter company name"
    }).min(1, {
        message: "Please Enter Company Name"
    }),
    designation: z.string({
        required_error: "Please enter designation"
    }),
    pin: z.string().min(6, {
        message: "Pin must be 6 characters"
    }).max(6, {
        message: "Pin must be 6 characters"
    }),
    address: z.string({
        required_error: "Please enter address"
    }).min(1, {
        message: "Please enter address"
    }),
    industry: z.string({
        required_error: "Please choose industry"
    }).min(1, {
        message: "Please choose industry"
    }),
})

export default CompanyRegisterSchema;