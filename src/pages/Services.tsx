import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export default function Services() {
  const { language } = useLanguage();
  const t = ui[language].services;
  const currentServices = services[language];

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

          {/* Services Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {currentServices.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Section */}
          <Reveal direction="up">
            <div className="bg-forest text-cream p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-display mb-6">
                {t.ctaTitle1} <span className="italic text-sage">{t.ctaTitle2}</span>
              </h2>
              <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10 font-light">
                {t.ctaDesc}
              </p>
              <Link 
                to="/epikoinonia" 
                className="inline-block px-8 py-4 bg-sage text-forest font-medium tracking-wider hover:bg-white transition-colors duration-300"
              >
                {t.ctaBtn}
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </PageTransition>
  );
}
