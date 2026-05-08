  
import reactIcon from "@/assets/icons/reactIcon.png";
import nextIcon from "@/assets/icons/nextIcon.png";
import typescriptIcon from "@/assets/icons/typescriptIcon.png";
import tailwindIcon from "@/assets/icons/tailwindcssIcon.png";
import javascriptIcon from "@/assets/icons/javascriptIcon.png";
import { StaticImageData } from "next/image";

import figmaIcon from "@/assets/icons/FigmaIcon.png"
import gitIcon from "@/assets/icons/GitIcon.png"
import githubIcon from "@/assets/icons/githubIcon.png"

export type Skill = {
    id: number,
    label: string;
    icon: StaticImageData;
    rotate?: string;
}

// stack reutilizável para SkillsSection e ProjectsSection
export const skills: Skill[] = [
    { id:0, label: "ReactJS", icon: reactIcon, rotate: "-rotate-2"},
    { id:1, label: "NextJS", icon: nextIcon, rotate: "rotate-1"},
    { id:2, label: "Typescript", icon: typescriptIcon, rotate:"-rotate-1" },
    { id:3, label: "Tailwind CSS", icon: tailwindIcon, rotate:"rotate-2" },
    { id:4, label: "JS ES6+", icon: javascriptIcon, rotate:"-rotate-2" },
    { id:5, label: "Figma", icon: figmaIcon, rotate: "rotate-2"},
    { id:6, label: "Git", icon: gitIcon, rotate: "-rotate-2"},
    { id:7, label: "GitHub", icon: githubIcon, rotate:"rotate-2" },
  ];