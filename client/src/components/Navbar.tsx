/*
 * DESIGN: Academic Elegance – sticky top nav with smooth scroll links
 * Forest Green primary, Ochre accent, Cormorant Garamond logo
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Background", href: "#background" },
  { label: "Goals", href: "#goals" },
  { label: "Results", href: "#results" },
  { label: "Team", href: "#team" },
  { label: "Dissemination", href: "#dissemination" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFAF5]/95 backdrop-blur-sm shadow-sm border-b border-[#e8e0d0]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col leading-none text-left"
          >
            <span
              className="text-[#1A4731] font-semibold tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
            >
              PRIN 2022
            </span>
            <span
              className="text-[#C17D11] text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "0.12em" }}
            >
              LIF · LIFR · PDAC
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative text-sm transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? "text-[#1A4731] font-medium"
                      : "text-[#374151] hover:text-[#1A4731]"
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C17D11] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#1A4731] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FDFAF5] border-t border-[#e8e0d0] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-[#374151] hover:text-[#1A4731] text-sm font-medium transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
