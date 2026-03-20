import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { TeamCard } from "../components/TeamCard";
import { team } from "../data";

export default function Team() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                ΟΙ ΑΝΘΡΩΠΟΙ ΜΑΣ
              </span>
            </Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] font-display tracking-tight">
              <TextMask>
                <span>Η Επιστημονική</span>
              </TextMask>
              <br />
              <TextMask>
                <span className="text-sage italic font-normal">Ομάδα</span>
              </TextMask>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-cream/80 font-body font-light leading-relaxed max-w-2xl">
                Μια προσεκτικά επιλεγμένη ομάδα κορυφαίων ειδικών, με βαθιά γνώση, ενσυναίσθηση και δέσμευση στην εξέλιξή σας.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {team.map((member) => (
              <StaggerItem key={member.id}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-forest mb-8">
              Η προσέγγισή μας είναι <span className="text-sage italic font-normal">συνεργατική.</span>
            </h2>
            <p className="text-lg text-forest/80 mb-10 max-w-2xl mx-auto font-body leading-relaxed">
              Στο Ψ-PSY πιστεύουμε ότι η θεραπεία είναι μια σχέση. Κάθε μέλος της ομάδας μας φέρνει τη δική του εξειδίκευση, αλλά όλοι μοιραζόμαστε τον ίδιο σεβασμό για τον άνθρωπο και την ιστορία του.
            </p>
            <Link to="/to-kentro" className="btn-outline group">
              <span className="relative z-10 flex items-center justify-center gap-3">
                ΓΝΩΡΙΣΤΕ ΤΟ ΚΕΝΤΡΟ
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
