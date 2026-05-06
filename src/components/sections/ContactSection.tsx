import { contacts } from "@/data/contacts"
import { patterns } from "../ui/patterns"
import Image from "next/image"

export const ContactSection = () => {
    return(
        <section className={`w-full bg-[#313145]`}>
            <div className="container mx-auto grid grid-cols-2 p-8 md:p-16">
                <address className="flex justify-center gap-20">
                    <ul className="flex gap-5">
                        {contacts.map(contact => (
                            <li key={contact.id} className="">
                                <a href={contact.link} target="_blank" className="flex flex-col items-center gap-1">
                                    <Image width={52} height={52} src={contact.icon} alt={contact.label} 
                                    className={`p-2 bg-amber-300 border rounded-md ${contact.rotate} transition-transform duration-300 hover:rotate-none`}/>
                                    <p className="font-sans">{contact.label}</p>                                
                                </a>
                            </li>
                        ))}
                    </ul>
                </address>
                <form className="flex justify-center">
                    <input type="text" placeholder="Digite seu nome..."></input>
                    <input type="email" placeholder="Digite seu e-mail"></input>
                    <textarea ></textarea>
                </form>
            </div>
        </section>
    )
}