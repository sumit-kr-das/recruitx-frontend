import * as z from "zod";

const userEducationSchema = z.object({
  degree: z.string().min(5, {
    message: "Select the degree",
  }),
  college: z.string().min(3, {
    message: "College/Institute name is missing",
  }),
  course: z.string().min(1, {
    message: "Enter course",
  }),
  courseType: z.string().min(1, {
    message: "Select course type",
  }),
  admissionYear: z.string().min(4, {
    message: "Starting year is missing",
  }),
  passYear: z.string().min(4, {
    message: "Passing year is missing",
  }),
  marks: z.string().min(2, {
    message: "Total marks is missing",
  }),
});

export default userEducationSchema;
