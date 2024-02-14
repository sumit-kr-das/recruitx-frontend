import * as z from "zod";

const UserRegisterSchema = z
  .object({
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
    }),
    password: z
      .string()
      .min(5, {
        message: "Password must be at list 5 characters",
      })
      .max(20, {
        message: "Password must be at max 20 characters",
      }),
    confirmPassword: z
      .string()
      .min(5, {
        message: "Password must be at list 5 characters",
      })
      .max(20, {
        message: "Password must be at max 20 characters",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export default UserRegisterSchema;
