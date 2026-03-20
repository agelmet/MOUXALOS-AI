import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export function Footer() {
  const { language } = useLanguage();
  const t = ui[language].footer;
  const navT = ui[language].nav;

  return (
    <footer className="bg-forest text-cream py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-display mb-4 tracking-wider">Ψ-PSY</h3>
            <p className="text-cream/70 max-w-xs font-light">
              {t.desc}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl mb-6 tracking-wider">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-cream/70 hover:text-sage transition-colors">
                  {navT.home}
                </Link>
              </li>
              <li>
                <Link to="/ypiresies" className="text-cream/70 hover:text-sage transition-colors">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link to="/psychologoi" className="text-cream/70 hover:text-sage transition-colors">
                  {navT.team}
                </Link>
              </li>
              <li>
                <Link to="/to-kentro" className="text-cream/70 hover:text-sage transition-colors">
                  {navT.center}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6 tracking-wider">{t.contact}</h4>
            <ul className="space-y-3 text-cream/70">
              <li>Αγγέλου Μεταξά 15, Γλυφάδα</li>
              <li>Εμπορικό Κέντρο "Premier"</li>
              <li>
                <a href="tel:2108940848" className="hover:text-sage transition-colors">
                  210 8940848
                </a>
              </li>
              <li>
                <a href="mailto:info@p-psy.gr" className="hover:text-sage transition-colors">
                  info@p-psy.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} Ψ-PSY. {t.rights}</p>
          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
}
