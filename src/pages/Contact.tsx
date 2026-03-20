import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = ui[language].contact;

  return (
    <PageTransition>
      <div className="bg-cream min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden min-h-[60vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://github.com/agelmet/Image-hosting-/blob/main/2026-02-16-11.jpg?raw=true" 
              alt="Ψ-PSY Contact" 
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            
            {/* Contact Form */}
            <Reveal direction="right">
              <div className="bg-white p-8 md:p-12 border border-forest/10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium tracking-wider text-forest/80 uppercase">
                        {t.form.firstName}
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full border-b border-forest/20 bg-transparent py-3 focus:outline-none focus:border-sage transition-colors text-forest"
                        placeholder={t.form.firstNamePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium tracking-wider text-forest/80 uppercase">
                        {t.form.lastName}
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full border-b border-forest/20 bg-transparent py-3 focus:outline-none focus:border-sage transition-colors text-forest"
                        placeholder={t.form.lastNamePlaceholder}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium tracking-wider text-forest/80 uppercase">
                      {t.form.email}
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full border-b border-forest/20 bg-transparent py-3 focus:outline-none focus:border-sage transition-colors text-forest"
                      placeholder={t.form.emailPlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium tracking-wider text-forest/80 uppercase">
                      {t.form.phone}
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full border-b border-forest/20 bg-transparent py-3 focus:outline-none focus:border-sage transition-colors text-forest"
                      placeholder={t.form.phonePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium tracking-wider text-forest/80 uppercase">
                      {t.form.message}
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full border-b border-forest/20 bg-transparent py-3 focus:outline-none focus:border-sage transition-colors text-forest resize-none"
                      placeholder={t.form.messagePlaceholder}
                    ></textarea>
                  </div>

                  <button 
                    type="button"
                    className="w-full py-4 bg-forest text-cream font-medium tracking-wider uppercase hover:bg-sage hover:text-forest transition-colors duration-300 mt-8"
                  >
                    {t.form.submit}
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Contact Info */}
            <div>
              <Reveal direction="left">
                <h3 className="text-3xl font-display text-forest mb-12">{t.infoTitle}</h3>
              </Reveal>

              <StaggerContainer className="space-y-12">
                <StaggerItem>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage shrink-0">
                      <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wider uppercase text-forest/60 mb-2">
                        {t.address}
                      </h4>
                      <p className="text-lg text-forest font-light" dangerouslySetInnerHTML={{ __html: t.addressValue }} />
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage shrink-0">
                      <Phone size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wider uppercase text-forest/60 mb-2">
                        {t.phone}
                      </h4>
                      <a href="tel:2108940848" className="text-lg text-forest font-light hover:text-sage transition-colors">
                        210 8940848
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage shrink-0">
                      <Mail size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wider uppercase text-forest/60 mb-2">
                        {t.email}
                      </h4>
                      <a href="mailto:info@p-psy.gr" className="text-lg text-forest font-light hover:text-sage transition-colors">
                        info@p-psy.gr
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-sage shrink-0">
                      <Clock size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wider uppercase text-forest/60 mb-2">
                        {t.hours}
                      </h4>
                      <p className="text-lg text-forest font-light" dangerouslySetInnerHTML={{ __html: t.hoursValue }} />
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

          </div>

          {/* Map */}
          <Reveal direction="up">
            <div className="w-full h-[500px] bg-forest/5 border border-forest/10 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.514421183366!2d23.75066491532152!3d37.86221197974378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1be8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sAggelou%20Metaxa%2015%2C%20Glifada%20166%2075%2C%20Greece!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Maps Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </Reveal>

        </div>
      </div>
    </PageTransition>
  );
}
