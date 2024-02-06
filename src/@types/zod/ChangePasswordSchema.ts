import * as z from "zod";

const ChangePasswordSchema = z.object({
    newPassword: z.string().min(1, {
        message: "Please enter new password"
    }),
    oldPassword: z.string().min(1, {
        message: "Please enter old password"
    })
});

export default ChangePasswordSchema;