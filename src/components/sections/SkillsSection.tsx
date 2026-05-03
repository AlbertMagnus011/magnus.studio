import Image from "next/image";
import Link from "next/link";

import reactIcon from "@/assets/icons/reactIcon.png";
import nextIcon from "@/assets/icons/nextIcon.png";
import typescriptIcon from "@/assets/icons/typescriptIcon.png";
import tailwindIcon from "@/assets/icons/tailwindcssIcon.png";
import javascriptIcon from "@/assets/icons/javascriptIcon.png";

export const SkillsSection = () => {
  const skills = [
    { label: "ReactJS", icon: reactIcon },
    { label: "NextJS", icon: nextIcon },
    { label: "Typescript", icon: typescriptIcon },
    { label: "Tailwind CSS", icon: tailwindIcon },
    { label: "Javascript ES6+", icon: javascriptIcon },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#becd9b] py-20"
    >
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-3">

          {/* esquerda */}
          <div className="grid grid-cols-2 gap-5">
            {skills.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="group flex flex-col items-center gap-3 rounded-3xl border border-[#392a35]/10  bg-white/30 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#29ffc9] hover:shadow-lg">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={56}
                  height={56}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <p className="text-sm font-medium text-[#392a35]">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>

          {/* centro */}
          <div className="space-y-6 text-center md:text-left">
            <p className="font-inter uppercase tracking-[0.25em] text-sm text-[#392a35]/60">
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

          {/* direita */}
          <div className="flex justify-center md:justify-end">
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