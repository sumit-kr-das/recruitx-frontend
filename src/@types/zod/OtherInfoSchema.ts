import * as z from "zod";

const OtherInfoSchema = z.object({
  github: z.string().min(5, {
    message: "Github profile is missing",
  }),
  linkedIn: z.string().min(5, {
    message: "LinkedIn profile is missing",
  }),
  dateOfBirth: z.string().min(1, {
    message: "DOB is missing",
  }),
  age: z.string().min(1, {
    message: "Age is missing",
  }),
  address: z.string().min(10, {
    message: "Your address is missing",
  }),
  bio: z.string().min(240, { message: "Bio should be minimum 240 character" }),
  objective: z
    .string()
    .min(40, { message: "Headline should be min 40 character" })
    .max(120, { message: "Headline should be max 180 character" }),
  gender: z.string().min(1, {
    message: "Gender is not selected",
  }),
  language: z.array(z.string()),
  skills: z.array(z.string()),
  maxQualification: z.string().min(1, {
    message: "Qualification is not selected",
  }),
});

export default OtherInfoSchema;
