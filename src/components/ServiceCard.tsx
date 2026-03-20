import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Users, Heart, Home, Monitor } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  user: <User size={32} strokeWidth={1.5} />,
  users: <Users size={32} strokeWidth={1.5} />,
  heart: <Heart size={32} strokeWidth={1.5} />,
  home: <Home size={32} strokeWidth={1.5} />,
  monitor: <Monitor size={32} strokeWidth={1.5} />,
};

export function ServiceCard({ id, title, shortDesc, icon }: ServiceCardProps) {
  const { language } = useLanguage();
  const t = ui[language].services;

  return (
    <Link 
      to={`/ypiresies/${id}`}
      className="group block p-8 border border-forest/10 bg-white hover:bg-forest hover:text-cream transition-all duration-500"
    >
      <div className="mb-6 text-sage group-hover:text-cream transition-colors duration-500">
        {iconMap[icon]}
      </div>
      <h3 className="text-2xl font-display mb-4">{title}</h3>
      <p className="text-forest/70 group-hover:text-cream/80 mb-8 line-clamp-3 transition-colors duration-500">
        {shortDesc}
      </p>
      <div className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-forest group-hover:text-sage transition-colors duration-500">
        <span>{t.learnMore}</span>
        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </Link>
  );
}
