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
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <Reveal>
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
              <p className="text-xl text-forest/70 font-light">
                {t.desc}
              </p>
            </Reveal>
          </div>

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
