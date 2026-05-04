import whatsappIcon from "@/assets/icons/whatsappIcon.png"
import githubIcon from "@/assets/icons/githubIcon.png"
import linkedinIcon from "@/assets/icons/linkedinIcon.png"
import { StaticImageData } from "next/image"

type contact = {
    id: number,
    label: string,
    username?: string,
    icon: StaticImageData,
    link: string,
    rotate?: string
}

export const contacts:contact[] = [
        {
            id:0,label:"whatsapp", icon:whatsappIcon, username:"+55 011 992603947",
            link:"https://api.whatsapp.com/send/?phone=5511992603947&text&type=phone_number&app_absent=0",rotate:"-rotate-2",
        },
        {
            id:1, label:"github",icon:githubIcon, username:"AlbertMagnus011",
            link:"https://github.com/AlbertMagnus011", rotate:"rotate-2"
        },
        {
            id:2, label:"linkedin",icon:linkedinIcon, username:"marcos-da-silva-b7766220b",
            link:"https://www.linkedin.com/in/marcos-da-silva-b7766220b", rotate:"-rotate-2"
        }
    ]