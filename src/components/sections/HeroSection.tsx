import Image from "next/image"


export const HeroSection = () => {
    return (
        <section className="w-full min-h-screen bg-[#e0f3b2]" >
            <div className="container mx-auto flex flex-col md:flex-row p-8 md:p-16 gap-8">
                <div className="flex flex-col  basis-2/5 gap-4 text-black justify-center">
                    <p className="font-sans tracking-[0.15em] text-2xl uppercase text-[#392a35]/70">Olá, eu sou Marcos Silva</p>
                    <h1 className="font-cabin font-bold text-5xl leading-tight text-[#392a35]">
                        <span className="typing">Desenvolvedor
                        <span className="text-[#29ffc9]"> Front-End</span></span></h1>
                    <p className="max-w-xl font-sans text-lg tracking-wide leading-relaxed text-[#392a35]/80">Sou um apaixonado por tecnologia, principalmente pela parte de desenvolvimento Web, que se mostra um campo muito vasto de oportunidades. Estou empolgado para contribuir em projetos desafiadores, aplicando tanto meu conhecimento acadêmico quanto prático para criar boas experiências para os usuários.</p>
                </div>
                <div className="flex basis-3/5 justify-center items-center">
                    <Image src="/monitor.png" alt="Monitor sketch" width={640} height={640} 
                    className="object-contain rotate-4 hover:scale-105 transition-transform duration-500"/>
                </div>
            </div>
        </section>
    )
}