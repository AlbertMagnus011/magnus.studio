import { Resend } from "resend";
import { contactSchema } from "@/schemas/contactSchema";
import { error } from "console";

const resend = new Resend(
    process.env.RESEND_API_KEY
);

export async function POST(req: Request) {
    try{
        const body = await req.json();
        const parsed = contactSchema.safeParse(body);
        if(!parsed.success) {
            return Response.json(
                {error: parsed.error.issues },
                {status: 400}
            );
        }

        const { name, email, message } = parsed.data;
        resend.emails.send({
            from: 'Magnus Studio <onboarding@resend.dev>',
            to: 'minhaqueridaia@gmail.com',
            subject: `Contato portfolio - ${name}`,
            replyTo: email,
            html: `
                <h2>Novo contato</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
            `,
            });

        return Response.json({
        success: true,
        });
    } catch {
        return Response.json(
            { error: "Erro interno" },
            { status: 500 }
        );
        }
    }