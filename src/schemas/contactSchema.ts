import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "Nome muito curto"),
    email: z.email("E-mail inválido"),
    message: z.string().min(20, "Mensagem muito curta").max(500, "Mensagem muito longa")
})

export type ContactFormData = z.infer<typeof contactSchema>;