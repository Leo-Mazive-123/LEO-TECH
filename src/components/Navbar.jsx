"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "How We Work", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/30">
      <nav className="w-[93%] max-w-300 mx-auto h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center shrink-0 "
          aria-label="Leo-Tech Home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/Resized.png"
            alt="Leo-Tech Logo"
            width={100}
            height={50}
            loading="eager"
            priority
            className="w-20 md:w-17 h-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative text-sm font-medium transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-2
                  after:h-0.5 after:bg-white
                  after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-white after:w-full"
                      : "text-neutral-400 hover:text-white after:w-0 hover:after:w-full"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* GET SUPPORT BUTTON */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-md text-xs font-semibold whitespace-nowrap hover:bg-neutral-200 transition-all duration-300 group"
        >
          Get Support

          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center text-white p-2 hover:bg-white/10 rounded-md transition"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#080808] border-t border-white/10 shadow-2xl">
          <div className="w-[90%] max-w-300 mx-auto flex flex-col py-7 gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="block w-7 h-0.5 bg-white mt-2" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-white text-black py-3.5 rounded-md text-sm font-semibold hover:bg-neutral-200 transition-all duration-300"
            >
              Get Support
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}