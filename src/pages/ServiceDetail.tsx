import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { services } from "../data";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-4xl font-display text-forest mb-4">Η υπηρεσία δεν βρέθηκε</h1>
          <Link to="/ypiresies" className="text-sage hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Επιστροφή στις υπηρεσίες
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <Link to="/ypiresies" className="inline-flex items-center gap-2 text-sage font-bold tracking-[0.1em] uppercase text-xs mb-10 hover:text-cream transition-colors">
              <ArrowLeft className="w-4 h-4" /> ΟΛΕΣ ΟΙ ΥΠΗΡΕΣΙΕΣ
            </Link>
          </Reveal>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] font-display tracking-tight">
              <TextMask>
                <span>{service.title.split(" ")[0]}</span>
              </TextMask>
              <br />
              <TextMask>
                <span className="text-sage italic font-normal">{service.title.split(" ").slice(1).join(" ")}</span>
              </TextMask>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-cream/80 font-body font-light leading-relaxed max-w-2xl">
                {service.subtitle}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="prose prose-lg prose-headings:font-display prose-headings:text-forest prose-p:text-forest/80 prose-p:font-body max-w-none mb-16">
                  {service.fullDesc.map((paragraph, idx) => (
                    <p key={idx} className="mb-6 text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(21,52,48,0.05)] border border-sage/10 mb-16">
                  <h3 className="text-2xl font-display font-bold text-forest mb-8">Σε ποιους απευθύνεται;</h3>
                  <StaggerContainer className="space-y-4">
                    {service.audiences.map((item, idx) => (
                      <StaggerItem key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-forest/80 font-body">{item}</span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </Reveal>

              <Reveal>
                <h3 className="text-3xl font-display font-bold text-forest mb-10">Συχνές Ερωτήσεις</h3>
                <div className="space-y-6">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl border border-sage/10">
                      <h4 className="text-xl font-bold text-forest mb-4 font-display">{faq.q}</h4>
                      <p className="text-forest/80 font-body leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <Reveal>
                  <div className="bg-forest text-cream p-8 md:p-10 rounded-3xl mb-8">
                    <h3 className="text-2xl font-display font-bold mb-6">Πλαίσιο Συνεδριών</h3>
                    <p className="text-cream/80 font-body leading-relaxed mb-8 italic">
                      "{service.quote}"
                    </p>
                    <Link to="/epikoinonia" className="btn-primary w-full text-center group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <div className="bg-white p-8 rounded-3xl border border-sage/10">
                    <h3 className="text-lg font-display font-bold text-forest mb-6">Άλλες Υπηρεσίες</h3>
                    <ul className="space-y-4">
                      {services.filter(s => s.id !== service.id).map(s => (
                        <li key={s.id}>
                          <Link to={`/ypiresies/${s.id}`} className="text-forest/70 hover:text-sage font-body flex items-center justify-between group">
                            <span>{s.title}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
