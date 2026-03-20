import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { ServiceCard } from "../components/ServiceCard";
import { TeamCard } from "../components/TeamCard";
import { services, team, galleryImages } from "../data";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export default function Home() {
  const { language } = useLanguage();
  const t = ui[language].home;
  const currentServices = services[language];
  const currentTeam = team[language];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://github.com/agelmet/Image-hosting-/blob/main/2026-02-16-10.jpg?raw=true" 
            alt="Ψ-PSY Center" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-forest/40" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-cream">
          <Reveal direction="up" delay={0.2}>
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-sage font-medium">
              {t.subtitle}
            </p>
          </Reveal>
          
          <Reveal direction="up" delay={0.4}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider uppercase mb-8">
              <span className="block">{t.title1}</span>
              <span className="block">{t.title2}</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-cream/80 font-light mb-12">
              {t.desc}
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/ypiresies" 
                className="px-8 py-4 bg-sage text-forest font-medium tracking-wider hover:bg-cream transition-colors duration-300 w-full sm:w-auto"
              >
                {t.servicesBtn}
              </Link>
              <Link 
                to="/epikoinonia" 
                className="px-8 py-4 border border-cream text-cream font-medium tracking-wider hover:bg-cream hover:text-forest transition-colors duration-300 w-full sm:w-auto"
              >
                {t.bookBtn}
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60">
          <span className="text-xs tracking-widest uppercase">{t.scroll}</span>
          <div className="w-[1px] h-12 bg-cream/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-sage animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-cream text-forest">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="text-sage text-sm font-medium tracking-wider uppercase mb-4">
                  {t.philSubtitle}
                </p>
              </Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8 leading-tight">
                <Reveal direction="up">{t.philTitle1}</Reveal>
                <Reveal direction="up" delay={0.1}>
                  <span className="italic text-sage">{t.philTitle2}</span>
                </Reveal>
              </h2>
              
              <Reveal delay={0.2}>
                <blockquote className="text-2xl font-display italic text-forest/80 border-l-2 border-sage pl-6 mb-8">
                  {t.philQuote}
                </blockquote>
              </Reveal>

              <StaggerContainer className="space-y-6 text-lg text-forest/70 font-light mb-12">
                <StaggerItem>
                  <p>{t.philP1}</p>
                </StaggerItem>
                <StaggerItem>
                  <p>{t.philP2}</p>
                </StaggerItem>
              </StaggerContainer>

              <Reveal delay={0.4}>
                <Link 
                  to="/to-kentro" 
                  className="inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase border-b border-forest pb-1 hover:text-sage hover:border-sage transition-colors"
                >
                  {t.philBtn} <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>

            <Reveal direction="left">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
                <img 
                  src="https://raw.githubusercontent.com/agelmet/MOUXALOS/refs/heads/main/2026-02-16.jpg" 
                  alt="Ψ-PSY Philosophy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-sage/10 -z-10" />
                <div className="absolute -top-8 -right-8 w-32 h-32 border border-forest/10 -z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <Reveal>
                <p className="text-sage text-sm font-medium tracking-wider uppercase mb-4">
                  {t.servSubtitle}
                </p>
              </Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
                <Reveal direction="up">{t.servTitle1}</Reveal>
                <Reveal direction="up" delay={0.1}>
                  <span className="italic text-sage">{t.servTitle2}</span>
                </Reveal>
              </h2>
            </div>
            <Reveal delay={0.2}>
              <Link 
                to="/ypiresies" 
                className="inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase hover:text-sage transition-colors"
              >
                {t.servAll} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-sage text-sm font-medium tracking-wider uppercase mb-4">
                  {t.teamSubtitle}
                </p>
              </Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
                <Reveal direction="up">{t.teamTitle1}</Reveal>
                <Reveal direction="up" delay={0.1}>
                  <span className="italic text-sage">{t.teamTitle2}</span>
                </Reveal>
              </h2>
              <Reveal delay={0.2}>
                <p className="text-lg text-forest/70 font-light">
                  {t.teamDesc}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <Link 
                to="/psychologoi" 
                className="inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase hover:text-sage transition-colors"
              >
                {t.teamAll} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentTeam.map((member) => (
              <StaggerItem key={member.id}>
                <TeamCard {...member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <Reveal>
                <p className="text-sage text-sm font-medium tracking-wider uppercase mb-4">
                  {t.gallerySubtitle}
                </p>
              </Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
                <Reveal direction="up">{t.galleryTitle1}</Reveal>
                <Reveal direction="up" delay={0.1}>
                  <span className="italic text-sage">{t.galleryTitle2}</span>
                </Reveal>
              </h2>
            </div>
            <Reveal delay={0.2}>
              <Link 
                to="/to-kentro" 
                className="inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase hover:text-sage transition-colors"
              >
                {t.galleryAll} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <StaggerItem key={index}>
                <div className="relative aspect-square overflow-hidden group">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
