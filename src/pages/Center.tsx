import { useState } from "react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { Lightbox } from "../components/Lightbox";
import { galleryImages } from "../data";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export default function Center() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = ui[language].center;

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

          {/* Philosophy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <Reveal direction="right">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-0">
                <img 
                  src="https://raw.githubusercontent.com/agelmet/Image-hosting-/main/philosophy.jpg" 
                  alt="Ψ-PSY Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage/10 -z-10" />
                <div className="absolute -top-8 -left-8 w-32 h-32 border border-forest/10 -z-10" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-sage text-sm font-medium tracking-wider uppercase mb-4">
                  {t.philSubtitle}
                </p>
              </Reveal>
              <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight text-forest">
                <Reveal direction="up">{t.philTitle1}</Reveal>
                <Reveal direction="up" delay={0.1}>
                  <span className="italic text-sage">{t.philTitle2}</span>
                </Reveal>
              </h2>
              
              <StaggerContainer className="space-y-6 text-lg text-forest/70 font-light mb-12">
                <StaggerItem>
                  <p>{t.philP1}</p>
                </StaggerItem>
                <StaggerItem>
                  <p>{t.philP2}</p>
                </StaggerItem>
              </StaggerContainer>

              <Reveal delay={0.4}>
                <blockquote className="text-2xl font-display italic text-forest/80 border-l-2 border-sage pl-6">
                  {t.philQuote}
                </blockquote>
              </Reveal>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <Reveal>
                <p className="text-sage text-sm font-medium tracking-wider uppercase mb-4">
                  {t.gallerySubtitle}
                </p>
              </Reveal>
              <h2 className="text-4xl md:text-5xl font-display leading-tight text-forest">
                <Reveal direction="up">{t.galleryTitle1}</Reveal>
                <Reveal direction="up" delay={0.1}>
                  <span className="italic text-sage">{t.galleryTitle2}</span>
                </Reveal>
              </h2>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <StaggerItem key={index}>
                  <button 
                    onClick={() => setSelectedImage(src)}
                    className="relative aspect-square overflow-hidden group w-full block focus:outline-none"
                  >
                    <img 
                      src={src} 
                      alt={`Gallery Image ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-cream font-medium tracking-wider uppercase text-sm border border-cream px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        {language === 'el' ? 'Προβολη' : 'View'}
                      </span>
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

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

      <Lightbox 
        src={selectedImage || ""} 
        alt="Gallery Image" 
        onClose={() => setSelectedImage(null)} 
      />
    </PageTransition>
  );
}
