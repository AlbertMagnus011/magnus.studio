"use client"

import { contacts } from "@/data/contacts"
import { patterns } from "../ui/patterns"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, ContactFormData } from "@/schemas/contactSchema"

export const ContactSection = () => {

    const {
        register, handleSubmit, formState: {errors, isSubmitting}, reset } = useForm<ContactFormData>({resolver:zodResolver(contactSchema)})

    const onSubmit = async (data: ContactFormData) => {
        const res = await fetch("/api/contact",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(data)
        });

        if(res.ok) {
            alert("Mensagem enviada!");
            reset();
        }
    }

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("contato.marcosdasilva.dev@gmail.com")
            alert("E-mail copiado!");
        } catch (err) {
            alert("Erro ao copiar.")
        }
    }

    return(
        <section id="contact" className={`w-full bg-[#313145] ${patterns.dottedBgW}`}>
            <div className="container mx-auto grid grid-cols-1 p-8 md:p-16 lg:grid-cols-2">
                <address className="flex flex-col items-center gap-4">
                    <div>
                        <h3 className="text-center font-cabin text-4xl mb-4">Ficou interessado ?</h3>
                        <p className="font-sans px-6">Estou sempre disposto a desenvolver novos projetos, me envie um e-mail com a sua proposta, 
                        estarei a disposição para atende-lo <span onClick={copyEmail} className="bg-[#ffe66d] text-[#392a35] px-2 py-1">contato.marcosssilva.dev@gmail.com</span>
                        </p>
                    </div>    
                    <ul className="flex gap-5 p-4">
                        {contacts.map(contact => (
                            <li key={contact.id} className="">
                                <a href={contact.link} target="_blank" className={`flex flex-col items-center gap-1 p-2 bg-[#ffe66d] border rounded-md  ${contact.rotate} shadow-[4px_4px_0px_#ffe66d]/30 transition-transform duration-300 hover:-translate-y-3 hover:shadow-[6px_6px_0px__#ffe66d]/20  hover:rotate-0`}>
                                    <Image width={52} height={52} src={contact.icon} alt={contact.label} />
                                    <p className="font-sans tracking-wide text-[#392a35] font-bold">{contact.label}</p>                                
                                </a>
                            </li>
                        ))}
                    </ul>
                </address>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <input type="text" placeholder="Digite seu nome..." {...register("name")} className="rounded-xl border-2 bg-[#fff8d6] px-4 py-3 text-[#392a35]"/>
                        {errors.name && <p>{errors.name.message}</p>}
                    <input type="email" placeholder="Digite seu e-mail..." {...register("email")} className="rounded-xl border-2 bg-[#fff8d6] px-4 py-3 text-[#392a35]"/>
                        {errors.email && <p>{errors.email?.message}</p>}
                    <textarea {...register("message")} placeholder="Sua mensagem..." className="min-h-35 resize-none rounded-xl border-2 bg-[#fff8d6] px-4 py-3 text-[#392a35]"/>
                        {errors.message && <p>{errors.message?.message}</p>}
                    <button disabled={isSubmitting} className="rounded-full bg-[#29ffc9] px-6 py-3 font-medium text-[#392a35]">{isSubmitting ? "Enviando" : "Enviar"}</button>
                </form>
            </div>
        </section>
    )
}