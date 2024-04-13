import { z, ZodType } from "zod";

export const zodContactFormInput: ZodType = z.object({
  name: z
    .string()
    .min(3, {
      message: "Nama tidak boleh kosong",
    })
    .max(30),
  email: z.string().email({
    message: "Email tidak valid",
  }),
  message: z.string().min(10, {
    message: "Pesan tidak boleh kosong",
  }),
});
