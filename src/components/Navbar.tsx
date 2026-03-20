import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = ui[language].nav;

  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.services, path: "/ypiresies" },
    { name: t.team, path: "/psychologoi" },
    { name: t.center, path: "/to-kentro" },
    { name: t.contact, path: "/epikoinonia" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-cream/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="z-50 flex items-center gap-2">
          <img 
            src="https://raw.githubusercontent.com/agelmet/Image-hosting-/main/597891457_1432943218836853_7585099840606536804_n.jpg" 
            alt="Ψ-PSY Logo" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wider transition-colors hover:text-sage",
                location.pathname === link.path ? "text-sage" : "text-forest"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium tracking-wider text-forest hover:text-sage transition-colors"
          >
            <Globe size={16} />
            {language === 'el' ? 'EN' : 'EL'}
          </button>

          <Link
            to="/epikoinonia"
            className="px-6 py-2 border border-forest text-forest text-sm font-medium tracking-wider hover:bg-forest hover:text-cream transition-colors"
          >
            {t.book}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-forest"
          >
            <Globe size={16} />
            {language === 'el' ? 'EN' : 'EL'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-forest focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-cream z-40 flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-2xl font-display tracking-wider transition-colors",
                  location.pathname === link.path ? "text-sage" : "text-forest"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/epikoinonia"
              className="mt-8 px-8 py-3 bg-forest text-cream text-lg font-medium tracking-wider"
            >
              {t.book}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
