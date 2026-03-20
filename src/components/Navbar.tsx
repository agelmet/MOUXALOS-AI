import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ΑΡΧΙΚΗ", path: "/" },
    { name: "ΥΠΗΡΕΣΙΕΣ", path: "/ypiresies" },
    { name: "Η ΟΜΑΔΑ ΜΑΣ", path: "/psychologoi" },
    { name: "ΤΟ ΚΕΝΤΡΟ", path: "/to-kentro" },
    { name: "ΕΠΙΚΟΙΝΩΝΙΑ", path: "/epikoinonia" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-6",
          isScrolled ? "bg-forest-deep/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="https://github.com/agelmet/Image-hosting-/blob/main/597891457_1432943218836853_7585099840606536804_n.jpg?raw=true"
              alt="Ψ-PSY Logo"
              className="w-12 h-12 rounded-full object-cover border border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-sage"
            />
            <span className="text-xl font-semibold tracking-widest transition-colors duration-500 text-white uppercase font-display">
              Ψ-PSY
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "hover-link text-xs tracking-widest font-semibold transition-colors duration-300 uppercase",
                  location.pathname === link.path ? "text-white active-link" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="hover-link text-white/80 hover:text-white font-bold tracking-widest text-xs transition-colors uppercase">
              EN
            </button>
            <Link
              to="/epikoinonia"
              className="ml-2 px-8 py-3.5 bg-sage border border-transparent text-cream text-xs tracking-widest font-bold rounded-full transition-all duration-500 hover:shadow-lg hover:-translate-y-1 uppercase z-10"
            >
              ΚΛΕΙΣΤΕ ΣΥΝΕΔΡΙΑ
            </Link>
          </nav>

          <div className="lg:hidden flex items-center gap-4">
            <button className="text-white font-bold tracking-widest text-sm transition-colors">EN</button>
            <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-white" aria-label="Toggle menu">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-cream z-[9999] flex flex-col pt-32 px-8 overflow-y-auto">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="fixed top-6 right-6 p-2 text-forest z-[10000] bg-cream rounded-full shadow-md"
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl transition-colors text-forest uppercase font-display"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/epikoinonia"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 bg-forest text-cream text-center font-bold rounded-full tracking-widest text-sm uppercase z-10 relative"
            >
              ΚΛΕΙΣΤΕ ΣΥΝΕΔΡΙΑ
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
