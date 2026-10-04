import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173e50] text-xl font-bold text-white">
            T
          </div>
          <div>
            <div className="font-bold tracking-wide text-[#173e50]">
              TIS
            </div>
            <div className="text-[10px] tracking-[2px] text-gray-500">
              EDUCATION
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#bd8b3d]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#admissions"
          className="hidden items-center gap-2 rounded-full bg-[#173e50] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#bd8b3d] lg:flex"
        >
          Admissions <ArrowUpRight size={16} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#173e50] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-gray-100 py-3 text-gray-700 hover:text-[#bd8b3d]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block rounded-full bg-[#173e50] px-5 py-3 text-white"
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
}