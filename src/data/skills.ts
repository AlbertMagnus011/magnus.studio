  
import reactIcon from "@/assets/icons/reactIcon.png";
import nextIcon from "@/assets/icons/nextIcon.png";
import typescriptIcon from "@/assets/icons/typescriptIcon.png";
import tailwindIcon from "@/assets/icons/tailwindcssIcon.png";
import javascriptIcon from "@/assets/icons/javascriptIcon.png";
import { StaticImageData } from "next/image";

export type Skill = {
    label: string;
    icon: StaticImageData;
    rotate?: string;
}

export const skills: Skill[] = [
    { label: "ReactJS", icon: reactIcon, rotate: "-rotate-2" },
    { label: "NextJS", icon: nextIcon, rotate: "rotate-1"},
    { label: "Typescript", icon: typescriptIcon, rotate:"-rotate-1" },
    { label: "Tailwind CSS", icon: tailwindIcon, rotate:"rotate-2" },
    { label: "JS ES6+", icon: javascriptIcon, rotate:"-rotate-2" },
  ];