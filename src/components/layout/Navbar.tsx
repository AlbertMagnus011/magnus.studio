import Link from "next/link";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export const Navbar = () =>  {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 md:px-16">
        <Link href="/" className="text-2xl tracking-tight text-white">
          <span className="font-light">const</span>
          <span className="font-semibold px-2">Magnus</span>
        </Link>
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white after:absolute
                  after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}