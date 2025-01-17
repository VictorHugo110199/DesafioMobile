import { z } from "zod";

export const LoginUserFormSchema = z.object({
  user: z.string()
    .nonempty("Username is required")
    .regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
  password: z.string()
    .nonempty("Password is required")
})