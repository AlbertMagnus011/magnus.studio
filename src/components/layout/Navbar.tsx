"use client"

import Link from "next/link"

import { Menu ,X ,User, Zap, Coffee, Mail } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const Navbar = () => {
    const navLinks = [
        {label:"Sobre Mim", href: "#about", icon: User, rotate: "-rotate-1"},
        {label:"Skills", href: "#skills", icon:Zap, rotate: "rotate-1"},
        {label:"Projetos", href: "#projects", icon:Coffee, rotate: "-rotate-1"},
        {label:"Fale Comigo", href: "#contact", icon:Mail, rotate: "rotate-1"}
    ]

    const [open, setOpen] = useState(false);

    return (
    <header className="sticky top-0 z-50 border-b border-[#392a35]/50 bg-[#f6fff6] backdrop-blur-md">
        <nav className="container mx-auto flex h-20 items-center justify-between px-8 md:px-16">
            <Link href="/" className="flex items-center gap-4 text-[#392a35] text-lg mx-0">
                <Image src="/logo/coffee.png" alt="Logo" width={60} height={60} className="object-contain"/>
                <p className="text-[1.60rem] font-cabin font-bold text-black transition-all duration-700 hover:text-[#F27362]">Marcos Studio</p>
            </Link>
            <button onClick={() => setOpen(prev => !prev)} className="md:hidden p-2" aria-label={open ? "Fechar menu" : "Abrir menu"}>
                {open ? <X size={28} className="text-black"/> : <Menu size={28} className="text-black"/>}
            </button>
    <AnimatePresence>
        {open && (
            <>
                <div className="fixed inset-0 z-40 bg-black/5 md:hidden" onClick={()=> setOpen(false)}/>
                    <motion.div initial={{opacity: 0, y: -12, rotate: -2,}}
                    animate={{opacity: 1, y: 0, rotate: 1,}} 
                    exit={{opacity: 0, y: -12,}} 
                    transition={{duration: 0.22,}}
                    className="absolute z-50 top-full right-6 mt-4 w-72 rounded-3xl border-2 text-black border-[#392a35] bg-[#fff8d6] p-6
                    shadow-[8px_8px_0_rgba(57,42,53,0.18)] md:hidden">
                        <ul className="flex flex-col gap-8">
                            {navLinks.map(item => (
                                <li key={item.href}>
                                    <Link href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3">
                                        <item.icon size={18} />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
            </>

        )}
    </AnimatePresence>
    
                <ul className="hidden md:flex items-center gap-8 ">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={`group relative flex items-center gap-2 font-sans font-medium text-[1.05rem]
                            text-[#392a35] transition-all duration-300 hover:text-[#F27362] hover:-translate-y-0.5 ${item.rotate}`}>
                                <item.icon size={18} strokeWidth={2.2} className="transition-transform duration-300 group-hover:rotate-12"/>   
                                <span>{item.label}</span>
                                <span className="absolute -bottom-1 left-0 h-0.75 w-0 rounded-full bg-[#F27362] transition-all duration-500 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}