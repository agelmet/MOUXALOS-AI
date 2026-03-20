import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { team } from "../data";

export function TeamCard({ member }: { member: typeof team[0] }) {
  return (
    <Link to={`/psychologoi/${member.id}`} className="tilt-card block relative z-10 w-full">
      <div className="tilt-card-inner bg-white rounded-3xl p-4 shadow-[0_10px_30px_rgba(21,52,48,0.03)] border border-sage/10 h-full group">
        <div className="glare"></div>
        <div className="overflow-hidden rounded-2xl mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="team-img w-full aspect-[3/4] object-cover"
            loading="lazy"
          />
        </div>
        <div className="px-4 pb-4 card-content-3d flex flex-col">
          <h3 className="text-xl font-bold text-forest mb-2 font-display">
            {member.name}
          </h3>
          <p className="text-sage text-[10px] font-bold tracking-[0.1em] uppercase mb-1 flex-shrink-0">
            {member.role}
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-widest group-hover:text-sage transition-colors">
              ΠΛΗΡΕΣ ΒΙΟΓΡΑΦΙΚΟ <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
