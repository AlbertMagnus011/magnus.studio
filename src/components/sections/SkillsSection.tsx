import Image from "next/image";
import { patterns } from "@/components/ui/patterns"
import { skills } from "@/data/skills"

export const SkillsSection = () => {


  return (
    <section id="skills" className={`w-full bg-[#f6fff6]  ${patterns.linedBg}`}>
      <div className="container mx-auto p-8 lg:p-16">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-3">

          <div className="grid grid-cols-3 gap-5">
            {skills.map((item) => (
              <button
                key={item.id}
                className={`group relative flex min-h-32.5 flex-col items-center justify-center gap-3 rounded-sm border-2 border-[#392a35]/20 bg-[#ffe66d] p-5 
                shadow-[4px_4px_0px_rgba(57,42,53,0.18)] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:rotate-0 hover:shadow-[8px_8px_0px_rgba(57,42,53,0.18)]
                ${item.rotate}`}>
                <Image src={item.icon} alt={item.label} width={56} height={56} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"/>
                <p className="hidden lg:block text-sm font-bold text-[#392a35]">
                  {item.label}
                </p>
              </button>
            ))}
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="font-inter uppercase tracking-[0.25em] text-lg text-[#392a35]/60">
              Minha Stack
            </p>

            <h2 className="font-cabin text-5xl font-bold text-[#392a35] leading-tight">
              Tecnologias que dão vida às minhas ideias
            </h2>

            <p className="text-lg leading-relaxed text-[#392a35]/80">
              Tenho desenvolvido projetos completos utilizando{" "}
              <span className="font-semibold text-[#29ffc9]">
                React, Next, Typescript e Tailwind
              </span>,
              sempre buscando interfaces bonitas, responsivas e com boa
              experiência de uso.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="rotate-2 rounded-4xl border-2 border-[#392a35] bg-white/40 p-4 shadow-xl">
              <div className="h-80 w-65 rounded-3xl bg-[#f6fff6]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};