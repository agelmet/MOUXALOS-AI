import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { TeamCard } from "../components/TeamCard";
import { team } from "../data";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export default function Team() {
  const { language } = useLanguage();
  const t = ui[language].team;
  const currentTeam = team[language];

  return (
    <PageTransition>
      <div className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden min-h-[60vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://github.com/agelmet/Image-hosting-/blob/main/2026-02-16-13.jpg?raw=true" 
              alt="Ψ-PSY Team" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-forest/70" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-cream">
            <Reveal direction="up">
              <p className="text-sage text-sm font-medium tracking-wider uppercase mb-4">
                {t.subtitle}
              </p>
            </Reveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight mb-8">
              <TextMask>
                <span className="block">{t.title1}</span>
              </TextMask>
              <TextMask delay={0.1}>
                <span className="block italic text-sage">{t.title2}</span>
              </TextMask>
            </h1>
            <Reveal delay={0.3}>
              <p className="text-xl text-cream/80 font-light max-w-2xl mx-auto">
                {t.desc}
              </p>
            </Reveal>
          </div>
        </section>

        <div className="container mx-auto px-6 md:px-12 py-24">
          
          {/* Team Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-32">
            {currentTeam.map((member) => (
              <StaggerItem key={member.id}>
                <TeamCard {...member} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Philosophy CTA */}
          <Reveal direction="up">
            <div className="bg-white border border-forest/10 p-12 md:p-20 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display mb-6 text-forest">
                {t.philTitle1} <span className="italic text-sage">{t.philTitle2}</span>
              </h2>
              <p className="text-forest/70 text-lg max-w-2xl mx-auto mb-10 font-light">
                {t.philDesc}
              </p>
              <Link 
                to="/to-kentro" 
                className="inline-block px-8 py-4 border border-forest text-forest font-medium tracking-wider hover:bg-forest hover:text-cream transition-colors duration-300"
              >
                {t.philBtn}
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </PageTransition>
  );
}
