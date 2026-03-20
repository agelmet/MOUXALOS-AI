import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem } from "../components/Animations";
import { services } from "../data";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../translations";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = ui[language].services;
  const currentServices = services[language];
  
  const service = currentServices.find((s) => s.id === id);
  const otherServices = currentServices.filter((s) => s.id !== id).slice(0, 3);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <h1 className="text-3xl font-display text-forest">Service not found</h1>
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
              to="/ypiresies" 
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-forest/60 hover:text-sage transition-colors mb-12"
            >
              <ArrowLeft size={16} /> {t.back}
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <Reveal direction="up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-8 text-forest">
                  {service.title}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-xl text-sage font-medium mb-12">
                  {service.subtitle}
                </p>
              </Reveal>

              <StaggerContainer className="space-y-6 text-lg text-forest/80 font-light mb-16">
                {service.fullDesc.map((paragraph, index) => (
                  <StaggerItem key={index}>
                    <p>{paragraph}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Audiences */}
              <Reveal direction="up">
                <div className="bg-white p-8 md:p-12 border border-forest/10 mb-16">
                  <h3 className="text-2xl font-display text-forest mb-8">{t.audiences}</h3>
                  <ul className="space-y-4">
                    {service.audiences.map((item, index) => (
                      <li key={index} className="flex items-start gap-4 text-forest/80 font-light">
                        <CheckCircle2 className="text-sage shrink-0 mt-1" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Quote/Framework */}
              <Reveal direction="up">
                <div className="border-l-4 border-sage pl-8 py-2 mb-16">
                  <h4 className="text-sm font-medium tracking-wider uppercase text-forest/60 mb-4">
                    {t.framework}
                  </h4>
                  <p className="text-xl font-display italic text-forest">
                    {service.quote}
                  </p>
                </div>
              </Reveal>

              {/* FAQs */}
              {service.faqs && (
                <Reveal direction="up">
                  <div className="mb-16">
                    <h3 className="text-3xl font-display text-forest mb-8">{t.faqs}</h3>
                    <div className="space-y-8">
                      {service.faqs.map((faq, index) => (
                        <div key={index} className="border-b border-forest/10 pb-8">
                          <h4 className="text-xl font-medium text-forest mb-4">{faq.q}</h4>
                          <p className="text-forest/70 font-light">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <Reveal direction="left" delay={0.4}>
                  <div className="bg-forest text-cream p-8 mb-12">
                    <h3 className="text-2xl font-display mb-4">{t.book}</h3>
                    <p className="text-cream/70 font-light mb-8">
                      {ui[language].services.ctaDesc}
                    </p>
                    <Link 
                      to="/epikoinonia" 
                      className="block w-full text-center px-6 py-4 bg-sage text-forest font-medium tracking-wider hover:bg-white transition-colors duration-300"
                    >
                      {t.book}
                    </Link>
                  </div>
                </Reveal>

                <Reveal direction="left" delay={0.5}>
                  <div>
                    <h4 className="text-sm font-medium tracking-wider uppercase text-forest/60 mb-6">
                      {t.other}
                    </h4>
                    <div className="space-y-4">
                      {otherServices.map((s) => (
                        <Link 
                          key={s.id} 
                          to={`/ypiresies/${s.id}`}
                          className="block p-4 border border-forest/10 hover:border-sage hover:bg-white transition-all group"
                        >
                          <h5 className="font-display text-lg text-forest group-hover:text-sage transition-colors">
                            {s.title}
                          </h5>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
