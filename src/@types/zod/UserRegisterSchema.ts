import * as z from "zod";

const UserRegisterSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  email: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  phoneNo: z
    .string()
    .min(10, {
      message: "Phone must be  10 digit.",
    })
    .max(10, {
      message: "Phone must be 10 digit.",
    }),
  workStatus: z.string({
    required_error: "Please select status",
  }),
  password: z.string({
    required_error: "Please the password",
  }),
});

export default UserRegisterSchema