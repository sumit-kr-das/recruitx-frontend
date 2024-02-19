import * as z from "zod";

const ResetPasswordSchema = z.object({
    password: z.string().min(1, {
        message: "Please enter new password"
    })
})

export default ResetPasswordSchema;