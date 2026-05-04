  
import reactIcon from "@/assets/icons/reactIcon.png";
import nextIcon from "@/assets/icons/nextIcon.png";
import typescriptIcon from "@/assets/icons/typescriptIcon.png";
import tailwindIcon from "@/assets/icons/tailwindcssIcon.png";
import javascriptIcon from "@/assets/icons/javascriptIcon.png";
import { StaticImageData } from "next/image";

export type Skill = {
    id: number,
    label: string;
    icon: StaticImageData;
    rotate?: string;
}

// stack reutilizável para SkillsSection e ProjectsSection
export const skills: Skill[] = [
    { id:0, label: "ReactJS", icon: reactIcon, rotate: "-rotate-2" },
    { id:1, label: "NextJS", icon: nextIcon, rotate: "rotate-1"},
    { id:2, label: "Typescript", icon: typescriptIcon, rotate:"-rotate-1" },
    { id:3, label: "Tailwind CSS", icon: tailwindIcon, rotate:"rotate-2" },
    { id:4, label: "JS ES6+", icon: javascriptIcon, rotate:"-rotate-2" },
  ];