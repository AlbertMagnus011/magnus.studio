"use client"

import { motion } from "framer-motion"

const text = "Desenvolvedor Front-End"

// simula escrita manual usando width + cursor blink
export const TypingSketch = () =>{
    return(
        <h1 className="font-cabin font-bold text-5xl leading-tight text-[#392a35] flex flex-wrap">
            {text.split("").map((letter, index) => (
                <motion.span key={index} initial= {{opacity:0, y: 10, filter: "blur(3px)"}}
                animate={{opacity:1, y:0, filter: "blur(0px)"}}
                transition={{delay: index * 0.06, duration: .35, ease: "easeOut"}}
                className={index >=14 ? "text-[#fcff0d]" : ""}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
            <motion.span animate={{opacity: [1, 0, 1]}}
            transition={{duration: 0.8, repeat: Infinity}} className="ml-1 inline-block h-12.5 w-0.75 bg-[#392a35]" />
        </h1>
    )
}