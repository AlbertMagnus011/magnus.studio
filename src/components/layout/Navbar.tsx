"use client"

import Link from "next/link"
import { User, Zap, Coffee, Mail } from "lucide-react";
import { motion } from "framer-motion"

export const Navbar = () => {
    const navLinks = [
        {label:"Sobre Mim", href: "#about", icon: User, rotate: "-rotate-1"},
        {label:"Skills", href: "#skills", icon:Zap, rotate: "rotate-1"},
        {label:"Projetos", href: "#projects", icon:Coffee, rotate: "-rotate-1"},
        {label:"Fale Comigo", href: "#contact", icon:Mail, rotate: "rotate-1"}
    ]

    return (
    <header className="sticky top-0 z-50 border-b border-[#d9f5df] bg-[#f6fff6] backdrop-blur-md">
        <nav className="container mx-auto flex h-20 items-center justify-between px-8 md:px-16">
            <Link href="/" className="flex font-cabin items-center text-[#444e4c] text-lg gap-2 mx-0">
                <motion.img src="/logo/coffee.png" alt="Logo" className="object-contain h-20 w-20"
                animate={{rotate: [-8, 6, -8], y: [0, -3, 0], scale: [1, 1.03, 1]}}
                transition={{duration: 4, repeat:Infinity, ease: "easeInOut"}}
                whileHover={{rotate: [-8, -12, -8], scale:[1, 1.08, 1]}}
          />
                <motion.p className="text-[1.60rem] font-cabin font-bold transition-all duration-200 hover:text-[#29ffc9]" 
                animate={{rotate: [-3, 5, -3], scale: [1, 1.03, 1]}}
                transition={{duration: 4.3, repeat:Infinity, ease:"easeOut"}}
                whileHover={{scale:1.10, color: "#29ffc9"}}>Marcos Studio</motion.p>
            </Link>
                <ul className="flex items-center gap-8 ">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className={`group relative flex items-center gap-2 font-inter font-medium text-[1.05rem]
                            text-[#392a35] transition-all duration-300 hover:text-[#29ffc9] hover:-translate-y-0.5 ${item.rotate}`}>
                            <item.icon size={18} strokeWidth={2.2} className="transition-transform duration-300 group-hover:rotate-12"/>   
                            <span>{item.label}</span>
                            <span className="absolute -bottom-1 left-0 h-0.75 w-0 rounded-full bg-[#29ffc9] transition-all duration-500 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}