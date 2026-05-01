import Link from "next/link"

export const Navbar = () => {
    const navLinks = [
        {label:"Sobre", href: "#abbout"},
        {label:"Tecnologias", href: "#technologies"},
        {label:"Projetos", href: "#projects"},
        {label:"Contato", href: "#contact"}
    ]

    return (
    <header className="sticky top-0 border-b border-zinc-800 bg-black ">
        <nav className="container mx-auto flex h-20 items-center justify-between px-8 md:px-16">
            <Link href="/" className="text-2xl tracking-tight">
                <span className="font-light text-blue-700">const</span>
                <span className="px-2 font-semibold text-blue-400">magnus</span>
            </Link>
                <ul className="flex items-center gap-8">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="relative text-[#4ADE80] transition-colors duration-300 hover:text-[#FB7185] after:absolute after:-bottom-1 after:h-0.5
                            after:left-0 after:bg-[#FB7185] after:transition-all after:w-0 after:duration-500 hover:after:w-full">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}