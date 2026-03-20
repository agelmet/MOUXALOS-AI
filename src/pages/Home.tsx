import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { ServiceCard } from "../components/ServiceCard";
import { TeamCard } from "../components/TeamCard";
import { services, team } from "../data";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 bg-cream">
        <div className="absolute inset-0 z-0">
          <img
            src="https://github.com/agelmet/Image-hosting-/blob/main/hero%20image.jpg?raw=true"
            alt="Ψ-PSY Hero"
            className="w-full h-full object-cover opacity-80"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/60 to-cream"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <Reveal>
            <span className="inline-block py-2 px-6 rounded-full bg-sage/20 text-cream backdrop-blur-md border border-cream/20 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 font-body">
              ΚΕΝΤΡΟ ΨΥΧΟΛΟΓΙΑΣ & ΨΥΧΟΘΕΡΑΠΕΙΑΣ
            </span>
          </Reveal>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-8 leading-[1.1] font-display tracking-tight">
            <TextMask>
              <span>Ο Χώρος</span>
            </TextMask>
            <br />
            <TextMask>
              <span className="text-sage italic font-normal">για την</span>
            </TextMask>
            <br />
            <TextMask>
              <span>Ψυχή Σας.</span>
            </TextMask>
          </h1>
          
          <Reveal delay={0.4}>
            <p className="text-lg md:text-2xl text-cream/90 max-w-2xl mx-auto mb-12 font-body font-light leading-relaxed">
              Ένα ασφαλές καταφύγιο στην καρδιά της Γλυφάδας, αφιερωμένο στην προσωπική σας ανάπτυξη και ψυχική ισορροπία.
            </p>
          </Reveal>
          
          <Reveal delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/ypiresies"
                className="btn-primary group w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/epikoinonia"
                className="btn-outline group w-full sm:w-auto text-center text-cream border-cream hover:bg-cream hover:text-forest"
              >
                <span className="relative z-10">ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ</span>
              </Link>
            </div>
          </Reveal>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-cream/60 text-[10px] tracking-[0.3em] uppercase font-bold">SCROLL</span>
          <div className="w-[1px] h-16 bg-cream/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-sage"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 bg-cream relative overflow-hidden">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-sage/10 rounded-3xl transform -rotate-3"></div>
                <img
                  src="https://github.com/agelmet/Image-hosting-/blob/main/philosophy.jpg?raw=true"
                  alt="Η Φιλοσοφία μας"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 bg-forest text-cream p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                  <Quote className="w-10 h-10 text-sage mb-4 opacity-50" />
                  <p className="font-display text-xl italic leading-snug">
                    "Η θεραπεία είναι ένα ταξίδι ανακάλυψης, όχι μια διαδικασία διόρθωσης."
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                  Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ
                </span>
              </Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-8 font-display leading-[1.1]">
                Περισσότερο από ένα γραφείο. <span className="text-sage italic font-normal">Μια εμπειρία.</span>
              </h2>
              <StaggerContainer className="space-y-6 text-forest/80 text-lg leading-relaxed font-body mb-10">
                <StaggerItem>
                  <p>
                    Στο Ψ-PSY πιστεύουμε ότι η ψυχοθεραπεία δεν πρέπει να είναι μια ψυχρή, κλινική διαδικασία. Δημιουργήσαμε έναν χώρο υψηλής αισθητικής, ζεστό και φιλόξενο, που αποπνέει ηρεμία από την πρώτη στιγμή που θα περάσετε την πόρτα μας.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    Προσεγγίζουμε κάθε άνθρωπο με βαθύ σεβασμό στη μοναδικότητά του. Δεν εφαρμόζουμε τυποποιημένες λύσεις, αλλά συν-δημιουργούμε μαζί σας το θεραπευτικό πλάνο που ανταποκρίνεται στις δικές σας, ξεχωριστές ανάγκες.
                  </p>
                </StaggerItem>
              </StaggerContainer>
              <Reveal>
                <Link to="/to-kentro" className="btn-outline group">
                  <span className="relative z-10 flex items-center gap-3">
                    ΓΝΩΡΙΣΤΕ ΤΟ ΚΕΝΤΡΟ ΜΑΣ
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                  ΠΩΣ ΜΠΟΡΟΥΜΕ ΝΑ ΒΟΗΘΗΣΟΥΜΕ
                </span>
              </Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest font-display leading-[1.1]">
                Εξειδικευμένες <span className="text-sage italic font-normal">Υπηρεσίες</span>
              </h2>
            </div>
            <Reveal>
              <Link to="/ypiresies" className="group flex items-center gap-3 text-forest font-bold text-sm tracking-[0.15em] uppercase hover:text-sage transition-colors">
                ΟΛΕΣ ΟΙ ΥΠΗΡΕΣΙΕΣ
                <span className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center group-hover:border-sage group-hover:bg-sage/10 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.slice(0, 3).map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-40 bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <Reveal>
              <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                ΟΙ ΑΝΘΡΩΠΟΙ ΜΑΣ
              </span>
            </Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 font-display leading-[1.1]">
              Η Επιστημονική <span className="text-sage italic font-normal">Ομάδα</span>
            </h2>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-cream/80 font-body font-light">
                Μια προσεκτικά επιλεγμένη ομάδα κορυφαίων ειδικών, με βαθιά γνώση, ενσυναίσθηση και δέσμευση στην εξέλιξή σας.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.slice(0, 4).map((member) => (
              <StaggerItem key={member.id}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-20 text-center">
            <Reveal>
              <Link to="/psychologoi" className="btn-outline border-cream text-cream hover:bg-cream hover:text-forest group">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  ΓΝΩΡΙΣΤΕ ΟΛΗ ΤΗΝ ΟΜΑΔΑ
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
