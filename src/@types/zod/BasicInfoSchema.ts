import * as z from "zod";

const BasicInfoSchema = z.object({
  name: z
    .string()
    .min(4, {
      message: "Name must be at least 4 characters",
    })
    .max(30, {
      message: "Name must be at max 30 characters",
    }),
  email: z.string().email(),
  phoneNo: z
    .string()
    .min(10, {
      message: "Phone must be 10 digit",
    })
    .max(10, {
      message: "Phone must be 10 digit",
    }),
  workStatus: z.string({
    required_error: "Select your status",
  })
});

export default BasicInfoSchema;
