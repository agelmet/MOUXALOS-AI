import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { team } from "../data";

export default function TeamDetail() {
  const { id } = useParams();
  const member = team.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="text-4xl font-display text-forest mb-4">Ο συνεργάτης δεν βρέθηκε</h1>
          <Link to="/psychologoi" className="text-sage hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Επιστροφή στην ομάδα
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-cream relative overflow-hidden min-h-screen">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <Link to="/psychologoi" className="inline-flex items-center gap-2 text-sage font-bold tracking-[0.1em] uppercase text-xs mb-10 hover:text-forest transition-colors">
              <ArrowLeft className="w-4 h-4" /> Η ΟΜΑΔΑ ΜΑΣ
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <Reveal direction="left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-sage/10 rounded-3xl transform -rotate-3"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="mb-12">
                <Reveal>
                  <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-4 font-body">
                    {member.role}
                  </span>
                </Reveal>
                <h1 className="text-4xl md:text-6xl font-bold text-forest mb-8 leading-[1.1] font-display tracking-tight">
                  <TextMask>
                    <span>{member.name}</span>
                  </TextMask>
                </h1>
                <Reveal delay={0.4}>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {member.specialties.map((spec, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full bg-white border border-sage/20 text-forest/80 text-xs font-bold tracking-widest uppercase font-body flex items-center gap-2 shadow-sm">
                        <BookOpen className="w-3 h-3 text-sage" /> {spec}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal>
                <div className="prose prose-lg prose-headings:font-display prose-headings:text-forest prose-p:text-forest/80 prose-p:font-body max-w-none mb-16">
                  {member.bio.map((paragraph, idx) => (
                    <p key={idx} className="mb-6 text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-forest text-cream p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Κλείστε ραντεβού</h3>
                    <p className="text-cream/80 font-body">Επικοινωνήστε μαζί μας για να προγραμματίσετε μια συνεδρία.</p>
                  </div>
                  <Link to="/epikoinonia" className="btn-primary bg-sage text-cream hover:bg-cream hover:text-forest group flex-shrink-0">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      ΕΠΙΚΟΙΝΩΝΙΑ
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
