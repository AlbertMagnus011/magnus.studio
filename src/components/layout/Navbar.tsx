import Link from "next/link"

export const Navbar = () => {
    const navLinks = [
        {label:"Sobre", href: "#abbout"},
        {label:"Tecnologias", href: "#technologies"},
        {label:"Projetos", href: "#projects"},
        {label:"Contato", href: "#contact"}
    ]

    return (
    <header className="sticky top-0 border-b border-[#d9f5df] bg-[#f6fff6] backdrop-blur-md">
        <nav className="container mx-auto flex h-20 items-center justify-between px-8 md:px-16">
            <Link href="/" className=" flex font-cabin items-center text-[#444e4c] text-lg gap-2">
                <img src="/logo/coffe.png" alt="Logo" className="object-contain h-20 w-20"/>
                <p className="text-2xl font-cabin font-bold">Magnus Studio</p>
            </Link>
                <ul className="flex items-center gap-8 ">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="relative font-inter font-medium text-[#444e4c] transition-colors duration-300 text-md font- tracking-wide hover:text-[#29ffc9] after:absolute after:-bottom-1 after:h-0.5
                            after:left-0 after:bg-[#29ffc9] after:transition-all after:w-0 after:duration-500 hover:after:w-full">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}