"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { FIRM_NAME, FIRM_PHONE } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ask-ca", label: "Ask CA" },
  { href: "/enquiry", label: "Enquiry" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Transparent only on homepage before scrolling
  const transparent = isHome && !scrolled;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${transparent ? "bg-transparent" : "bg-white shadow-lg"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/PRG-LOGO.png" alt="PRG & Associates Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className={`font-bold text-lg leading-tight ${transparent ? "text-white" : "text-gray-900"}`}>{FIRM_NAME}</p>
              <p className={`text-xs ${transparent ? "text-gray-200" : "text-gray-500"}`}>Taxation | Business | Finance | Legal</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-medium text-sm transition-colors ${
                  isActive
                    ? "text-yellow-500 border-b-2 border-yellow-500 pb-0.5"
                    : transparent ? "text-white hover:text-yellow-400" : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {l.label}
              </Link>
              );
            })}
            <a href={`tel:${FIRM_PHONE}`} className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
              <Phone size={14} /> Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className={`md:hidden ${transparent ? "text-white" : "text-gray-900"}`}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className={`font-medium py-2 border-b border-gray-100 transition-colors ${
                  isActive ? "text-yellow-500 font-semibold" : "text-gray-700"
                }`}>
                {l.label}
              </Link>
              );
            })}
            <a href={`tel:${FIRM_PHONE}`} className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-3 rounded-full font-semibold mt-2">
              <Phone size={16} /> {FIRM_PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
