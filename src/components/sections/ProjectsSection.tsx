import { patterns } from "@/components/ui/patterns";
import { projects } from "@/data/projects";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section id="projects" className={`w-full bg-[#F27362] ${patterns.dottedBg}`}>
    <div className="container mx-auto p-8 md:p-16 text-[#392a35]">
      <div className="text-center mb-10">
        <p className="text-medium tracking-wide uppercase mb-3">Meu trabalho</p>
        <h2 className="font-cabin font-bold text-5xl">Projetos</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
      {projects.map(project => {
        return (
          <article key={project.id} className="flex flex-col justify-center gap-6 border-2 rounded-4xl p-6 bg-[#fff8d6]
          shadow-[8px_8px_0_rgba(57,42,53,0.18)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_rgba(57,42,53,0.18)]">
            <div className="flex gap-4 items-center">
              {project.icon &&
                <div className="bg-[#ffe66d] p-2 -rotate-6 shadow-md rounded-md border border-[#392a35]/20">
                  <Image src={project.icon} alt={`${project.name} icon`} width={56} height={56} />
                </div>}
              <h3 className="font-cabin text-2xl">{project.name}</h3>
            </div>
            <div className="border-2 p-4 rounded-2xl rotate-2 mb-3">
              <Image src={project.image} alt={`${project.name} image`} />
            </div>
            <div className="font-sans tracking-wide leading-relaxed font-light text-[#392a35]/80">
              <p>{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {project.skills.map(skill => (
                <div key={skill.id} className={`bg-[#ffe66d] flex items-center px-2 py-1 text-sm rounded-md border border-[#392a35]/20 shadow-md ${skill.rotate}`}>
                  <Image src={skill.icon} alt={skill.label} width={46} height={46} className="" />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              {project.links.deploy &&
                <a className="text-[#392a35] bg-[#29ffc9] rounded-4xl py-3 px-5 transition-transform hover:duration-300 hover:scale-105" href={project.links.deploy} target="_blank">Deploy</a>}
              {project.links.repository &&
                <a className="text-[#392a35] bg-transparent rounded-4xl border-2 py-3 px-5 transition-transform hover:duration-300 hover:scale-105" href={project.links.repository} target="_blank">Github</a>}
            </div>
          </article>
        );
      })}
      </div>
    </div>
    </section>
  )
};