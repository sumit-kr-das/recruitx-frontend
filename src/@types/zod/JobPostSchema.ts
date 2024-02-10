import * as z from "zod";

const JobPostSchema = z.object({
    title: z.string().min(10, {
        message: "Title should minimum contain 10 characters"
    }),
    category: z.string().min(1, {
        message: "Category is required"
    }),
    description: z.string().min(100, {
        message: "Description should minimum contain 100 words"
    }),
    tags: z.array(z.string().min(1, {
        message: "At least one tag should be selected"
    })),
    vacancies: z.string().min(1, {
        message: "Please enter vacancy"
    }),
    jobType: z.string().min(1, {
        message: "Please select job type"
    }),
    workplaceType: z.string().min(1, {
        message: "Please select work space type"
    }),
    startDate: z.string(),
    endDate: z.string(),
    roles: z.string().min(1, {
        message: "Please select job role"
    }),
    skills: z.array(z.string().min(1, {
        message: 'Please select skill'
    })),
    minExprience: z.string(),
    maxExprience: z.string().min(1, {
        message: "Please enter maximum exprience"
    }),
    minSalary: z.string().min(1, {
        message: "Please enter minimum Salary"
    }),
    maxSalary: z.string().min(1, {
        message: "Please enter maximum salary"
    }),
    location: z.string().min(1, {
        message: "Please enter location"
    }),
    maxQualification: z.string().min(1, {
        message: "Please enter maximum qualification"
    }),
    degree: z.string().min(1, {
        message: "Please enter degree"
    })
});

export default JobPostSchema;