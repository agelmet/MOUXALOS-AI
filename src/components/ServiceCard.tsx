import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Users, Heart, Home, Monitor } from "lucide-react";
import { services } from "../data";

const iconMap: Record<string, React.ElementType> = {
  user: User,
  users: Users,
  heart: Heart,
  home: Home,
  monitor: Monitor,
};

export function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = iconMap[service.icon] || User;

  return (
    <Link
      to={`/ypiresies/${service.id}`}
      className="bento-card group h-full block"
    >
      <div className="bento-content p-8 md:p-10 h-full flex flex-col">
        <div className="service-icon mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-sage group-hover:text-cream">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-forest mb-5 font-display">
          {service.title}
        </h3>
        <div className="text-forest/70 leading-relaxed font-body text-base flex-grow space-y-4 mb-10">
          <p className="line-clamp-4">{service.shortDesc}</p>
        </div>
        <div className="h-px w-full bg-sage/10 mb-6"></div>
        <span className="inline-flex items-center gap-3 text-sage font-bold text-xs tracking-widest uppercase group-hover:gap-5 transition-all font-body mt-auto relative z-20">
          ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        </span>
      </div>
    </Link>
  );
}
