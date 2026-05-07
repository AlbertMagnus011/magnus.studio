import Image from "next/image"
import { TypingSketch } from "../ui/TypingSketch"
import monitor  from "@/assets/images/monitor.png"
import { backgroundPatterns } from "@/components/ui/patterns"
import { Reveal } from "../ui/Reveal"


export const HeroSection = () => {
    return (
        <section id="about" className={`w-full bg-[#4ddbb5] border-b border-b-[#c5f1b0] ${backgroundPatterns.dotted}`}> 
            <div className="container mx-auto flex flex-col md:flex-row p-8 lg:p-16 gap-8">
                <div className="flex flex-col  basis-3/7 gap-4 text-black justify-center">
                    <Reveal from="left">
                    <p className="font-sans tracking-[0.15em] text-lg uppercase text-[#392a35]/70">Olá, eu sou Marcos Silva</p>
                    </Reveal> 
                    <TypingSketch />
                    <Reveal from="left">
                    <p className="max-w-xl font-sans text-lg tracking-wide leading-relaxed text-[#392a35]/80">Sou apaixonado por tecnologia e pelo processo criativo. Do traço ao código, construo experiências digitais que equilibram estética, funcionalidade e propósito. Busco constantemente novas formas de aplicar minhas habilidades e evoluir como desenvolvedor.</p>
                    </Reveal>
                </div>
                <div className="flex basis-4/7 justify-center items-center">
                    <Reveal>
                    <Image src={monitor} alt="Monitor sketch" width={640} height={640} 
                    className="object-contain rotate-2 hover:scale-105 hover:rotate-0 transition-transform duration-700 "/>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}