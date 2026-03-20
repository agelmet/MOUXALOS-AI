import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

interface TeamCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
}

export function TeamCard({ id, name, role, image }: TeamCardProps) {
  const { language } = useLanguage();
  const t = ui[language].team;

  return (
    <Link to={`/psychologoi/${id}`} className="group block">
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="text-2xl font-display mb-2">{name}</h3>
      <p className="text-sage text-sm font-medium tracking-wider mb-4">{role}</p>
      <div className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-forest/60 group-hover:text-forest transition-colors duration-300">
        <span>{t.fullBio}</span>
        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </Link>
  );
}
