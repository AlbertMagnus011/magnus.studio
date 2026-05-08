"use client"

import arrow from "@/assets/icons/arrow.png"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link";
import { Reveal } from "../ui/Reveal";

const MotionImage = motion.create(Image);

export const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <footer className="w-full">
            <div className="container mx-auto flex flex-col md:flex-row md:items-center py-8 md:py-14 ">
                <Link href={"/"} className="flex justify-center md:justify-start items-center gap-4 md:basis-2/7">
                    <Reveal from="left">
                        <Image src={"/logo/coffee.png"} alt={"Logo Marcos Studio"} width={55} height={55} />
                    </Reveal>
                    <Reveal>
                        <p className="font-cabin text-2xl">Marcos Studio</p>
                    </Reveal>
                </Link>
                <div className="md:basis-3/7 flex justify-center">
                    <Reveal delay={0.1}>
                        <p className="text-center">© 2026 Marcos Silva. Todos os direitos reservados.</p>
                    </Reveal>
                </div>
                <div className="md:basis-2/7 flex mt-6 md:mt-0 justify-center md:justify-end">
                    <button onClick={scrollToTop} aria-label="Voltar ao topo">
                        <Reveal delay={0.2} from="right">
                            <MotionImage src={arrow} alt="Voltar ao topo" className="w-16 h-16 cursor-pointer"
                            animate={{ y: [0, -12, 0],}}
                            transition={{ duration:1.2, repeat: Infinity, ease:"easeInOut"}}
                            whileHover={{rotate:0}}
                            />
                        </Reveal>
                    </button>
                </div>
            </div>
        </footer>
    )
}