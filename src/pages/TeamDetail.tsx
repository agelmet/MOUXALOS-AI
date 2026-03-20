import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem } from "../components/Animations";
import { team } from "../data";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export default function TeamDetail() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = ui[language].team;
  const currentTeam = team[language];
  
  const member = currentTeam.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <h1 className="text-3xl font-display text-forest">Team member not found</h1>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Back Link */}
          <Reveal>
            <Link 
              to="/psychologoi" 
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-forest/60 hover:text-sage transition-colors mb-12"
            >
              <ArrowLeft size={16} /> {t.back}
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Image Sidebar */}
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <div className="sticky top-32">
                  <div className="relative aspect-[3/4] overflow-hidden mb-8">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-forest/10" />
                  </div>
                  
                  <div className="bg-white p-8 border border-forest/10">
                    <h3 className="text-sm font-medium tracking-wider uppercase text-forest/60 mb-4">
                      {language === 'el' ? 'Εξειδικευση' : 'Specialization'}
                    </h3>
                    <ul className="space-y-2">
                      {member.specialties.map((specialty, index) => (
                        <li key={index} className="text-forest font-medium">
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-7 lg:pt-12">
              <Reveal direction="up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-4 text-forest">
                  {member.name}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-xl text-sage font-medium tracking-wider mb-12">
                  {member.role}
                </p>
              </Reveal>

              <StaggerContainer className="space-y-6 text-lg text-forest/80 font-light mb-16">
                {member.bio.map((paragraph, index) => (
                  <StaggerItem key={index}>
                    <p>{paragraph}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <Reveal direction="up">
                <div className="border-t border-forest/10 pt-12 mt-12">
                  <h3 className="text-2xl font-display text-forest mb-6">{t.bookTitle}</h3>
                  <p className="text-forest/70 font-light mb-8">
                    {t.bookDesc}
                  </p>
                  <Link 
                    to="/epikoinonia" 
                    className="inline-block px-8 py-4 bg-forest text-cream font-medium tracking-wider hover:bg-sage hover:text-forest transition-colors duration-300"
                  >
                    {t.bookBtn}
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
