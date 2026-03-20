import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data";

export default function Services() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-cream relative overflow-hidden">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ
              </span>
            </Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-forest mb-8 leading-[1.1] font-display tracking-tight">
              <TextMask>
                <span>Ολοκληρωμένη</span>
              </TextMask>
              <br />
              <TextMask>
                <span className="text-sage italic font-normal">Υποστήριξη</span>
              </TextMask>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-forest/80 font-body font-light leading-relaxed max-w-2xl">
                Προσφέρουμε ένα ευρύ φάσμα ψυχοθεραπευτικών υπηρεσιών, προσαρμοσμένων στις δικές σας, μοναδικές ανάγκες.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-forest text-cream text-center">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Δεν είστε σίγουροι από πού να <span className="text-sage italic font-normal">ξεκινήσετε;</span>
            </h2>
            <p className="text-lg text-cream/80 mb-10 max-w-2xl mx-auto font-body">
              Επικοινωνήστε μαζί μας για μια αρχική αξιολόγηση. Θα σας βοηθήσουμε να επιλέξετε την κατάλληλη θεραπευτική προσέγγιση.
            </p>
            <Link to="/epikoinonia" className="btn-primary group">
              <span className="relative z-10 flex items-center justify-center gap-3">
                ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
