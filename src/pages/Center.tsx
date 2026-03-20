import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";
import { Lightbox } from "../components/Lightbox";

const galleryImages = [
  "https://github.com/agelmet/Image-hosting-/blob/main/1.jpg?raw=true",
  "https://github.com/agelmet/Image-hosting-/blob/main/2.jpg?raw=true",
  "https://github.com/agelmet/Image-hosting-/blob/main/3.jpg?raw=true",
  "https://github.com/agelmet/Image-hosting-/blob/main/4.jpg?raw=true",
  "https://github.com/agelmet/Image-hosting-/blob/main/5.jpg?raw=true",
  "https://github.com/agelmet/Image-hosting-/blob/main/6.jpg?raw=true",
];

export default function Center() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                ΤΟ ΚΕΝΤΡΟ ΜΑΣ
              </span>
            </Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] font-display tracking-tight">
              <TextMask>
                <span>Ένας χώρος</span>
              </TextMask>
              <br />
              <TextMask>
                <span className="text-sage italic font-normal">ηρεμίας & ασφάλειας.</span>
              </TextMask>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-cream/80 font-body font-light leading-relaxed max-w-2xl">
                Σχεδιάσαμε το Ψ-PSY με γνώμονα τη δική σας άνεση, δημιουργώντας ένα περιβάλλον που εμπνέει εμπιστοσύνη και γαλήνη.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-40 bg-cream relative overflow-hidden">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Reveal>
                <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                  Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ
                </span>
              </Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-8 font-display leading-[1.1]">
                Η αισθητική ως <span className="text-sage italic font-normal">θεραπευτικό εργαλείο.</span>
              </h2>
              <StaggerContainer className="space-y-6 text-forest/80 text-lg leading-relaxed font-body mb-10">
                <StaggerItem>
                  <p>
                    Πιστεύουμε ότι ο χώρος μέσα στον οποίο λαμβάνει χώρα η ψυχοθεραπεία παίζει καθοριστικό ρόλο στη διαδικασία. Ένα ψυχρό, αποστειρωμένο περιβάλλον μπορεί να δημιουργήσει απόσταση.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    Γι' αυτό, επιλέξαμε γήινα χρώματα, φυσικά υλικά, απαλό φωτισμό και άνετα έπιπλα. Κάθε λεπτομέρεια στο Ψ-PSY έχει μελετηθεί για να σας κάνει να νιώσετε σαν στο σπίτι σας, επιτρέποντάς σας να χαλαρώσετε και να αφεθείτε στη θεραπευτική διαδικασία.
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-sage/10 rounded-3xl transform rotate-3"></div>
                <img
                  src="https://github.com/agelmet/Image-hosting-/blob/main/philosophy.jpg?raw=true"
                  alt="Η Φιλοσοφία μας"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -left-8 bg-forest text-cream p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                  <Quote className="w-10 h-10 text-sage mb-4 opacity-50" />
                  <p className="font-display text-xl italic leading-snug">
                    "Ο χώρος αγκαλιάζει τον άνθρωπο, πριν καν ξεκινήσει η λέξη."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <Reveal>
              <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                ΠΕΡΙΗΓΗΣΗ
              </span>
            </Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest font-display leading-[1.1]">
              Φωτογραφικό <span className="text-sage italic font-normal">Υλικό</span>
            </h2>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((src, idx) => (
              <StaggerItem key={idx}>
                <div 
                  className="overflow-hidden rounded-2xl cursor-pointer group relative aspect-[4/3]"
                  onClick={() => setSelectedImage(src)}
                >
                  <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={src} 
                    alt={`Φωτογραφία χώρου ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
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
              Ελάτε να γνωριστούμε από <span className="text-sage italic font-normal">κοντά.</span>
            </h2>
            <p className="text-lg text-cream/80 mb-10 max-w-2xl mx-auto font-body">
              Το κέντρο μας βρίσκεται στην καρδιά της Γλυφάδας, εύκολα προσβάσιμο.
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

      <Lightbox 
        src={selectedImage} 
        alt="Φωτογραφία χώρου σε μεγέθυνση" 
        onClose={() => setSelectedImage(null)} 
      />
    </PageTransition>
  );
}
