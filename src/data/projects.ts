import { StaticImageData } from "next/image"
import { Skill, skills } from "@/data/skills"
import pizzaImage from "@/assets/images/b7pizza.png"
import pizzaIcon from "@/assets/icons/pizza.png"
import imcImage from "@/assets/images/imc.png"
import imcIcon from "@/assets/icons/imc.png"
import memoryImage from "@/assets/images/memorygame.png"
import memoryIcon from "@/assets/icons/memorygame.png"

type Project = {
    id: number,
    name: string,
    description: string,
    skills: Skill[],
    image: StaticImageData,
    icon?: StaticImageData | undefined,
    links:{
        deploy?: string,
        repository?: string
    }
}

// fonte única de verdade dos projetos

export const projects:Project[] = [
    {
        id: 0,
        name: "B7Pizza",
        description: "Essa página foi desenvolvida no curso B7WEB Fullstack para aprimorar habilidades com Javascript este módulo do curso tinha o objetivo de colocar em prática conceitos de Javascript",
        skills: [skills[4], skills[6], skills[7]],
        image: pizzaImage,
        icon: pizzaIcon,
        links: {
            deploy: "https://albertmagnus011.github.io/b7pizza",
            repository: "https://github.com/AlbertMagnus011/b7pizza"
        }
    },
    {        
        id: 1,
        name: "IMC calculadora",
        description: "Aplicação desenvolvida em React + TypeScript para cálculo de IMC (Índice de Massa Corporal).",
        skills: [skills[0], skills[1], skills[2]],
        image: imcImage,
        icon: imcIcon,
        links: {
            deploy: "https://react-calc-imc-magalb.vercel.app/",
            repository: "https://github.com/AlbertMagnus011/react-calc-imc"
        }
    },
    {        
        id: 2,
        name: "Jogo da memoria",
        description: "Aplicação desenvolvida com React, TypeScript, Tailwind CSS e Next.js, que implementa um clássico jogo da memória.",
        skills: [skills[0], skills[1], skills[2], skills[3]],
        image: memoryImage,
        icon: memoryIcon,
        links: {
            deploy: "https://react-memorygame-magalb.vercel.app/",
            repository: "https://github.com/AlbertMagnus011/react-memorygame"
        }
    }

]