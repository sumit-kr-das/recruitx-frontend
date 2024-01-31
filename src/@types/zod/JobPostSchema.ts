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
        message: "Atlease one tag should be selected"
    })),
    vacancies: z.preprocess((a) => parseInt(z.string().parse(a), 10),
        z.number().gte(0, 'Must be there have 1 vacancy')),
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
    minExprience: z.preprocess((a) => parseInt(z.string().parse(a)),
        z.number()),
    maxExprience: z.preprocess((a) => parseInt(z.string().parse(a), 10),
        z.number().gte(0, 'Maximum exprience must be grater than 0')),
    minSalary: z.preprocess((a) => parseInt(z.string().parse(a), 10),
        z.number().gte(100000, 'Minimum salary must be more than 1 Lakh')),
    maxSalary: z.preprocess((a) => parseInt(z.string().parse(a), 10),
        z.number()),
    location: z.string(),
    maxQualification: z.string().min(1, {
        message: "Please enter maximum qualification"
    }),
    degree: z.string().min(1, {
        message: "Please enter degree"
    })
});

export default JobPostSchema