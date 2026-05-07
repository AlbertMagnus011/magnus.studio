"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    delay?: number,
    from?: "bottom" | "left" | "right",
    className?: string
};

export const Reveal = ({children, delay = 0, from = "bottom", className }: Props) => {

    const variants = {
        bottom: { y: 40, x: 0},
        left: {x: -40, y: 0},
        right: { x: 40, y: 0}
    }

    return (
        <motion.div
            className={className}
            initial={{opacity:0, ...variants[from]}}
            whileInView={{opacity:1, x:0, y:0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration:0.6, delay, ease: "easeOut"}}>
                {children}
        </motion.div>
    )
}
