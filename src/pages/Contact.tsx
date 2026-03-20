import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { Reveal, StaggerContainer, StaggerItem, TextMask } from "../components/Animations";

export default function Contact() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-cream relative overflow-hidden">
        <div className="grain-overlay"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-block text-sage font-bold tracking-[0.2em] uppercase text-xs mb-6 font-body">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </span>
            </Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-forest mb-8 leading-[1.1] font-display tracking-tight">
              <TextMask>
                <span>Είμαστε εδώ</span>
              </TextMask>
              <br />
              <TextMask>
                <span className="text-sage italic font-normal">για εσάς.</span>
              </TextMask>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-forest/80 font-body font-light leading-relaxed max-w-2xl">
                Επικοινωνήστε μαζί μας για να προγραμματίσετε μια συνεδρία ή για οποιαδήποτε απορία έχετε.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Details */}
            <div>
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mb-10">
                  Στοιχεία Επικοινωνίας
                </h2>
              </Reveal>
              
              <StaggerContainer className="space-y-8 mb-16">
                <StaggerItem className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 text-sage">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-forest mb-2 font-body">Διεύθυνση</h3>
                    <p className="text-forest/80 font-body text-lg leading-relaxed">
                      Αγγέλου Μεταξά 15,<br />
                      Γλυφάδα 166 75,<br />
                      Εμπορικό Κέντρο "Premier"
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 text-sage">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-forest mb-2 font-body">Τηλέφωνο</h3>
                    <a href="tel:2108940000" className="text-forest/80 font-body text-lg hover:text-sage transition-colors">
                      210 894 0000
                    </a>
                  </div>
                </StaggerItem>
                
                <StaggerItem className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 text-sage">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-forest mb-2 font-body">Email</h3>
                    <a href="mailto:info@ps-psy.gr" className="text-forest/80 font-body text-lg hover:text-sage transition-colors">
                      info@ps-psy.gr
                    </a>
                  </div>
                </StaggerItem>
                
                <StaggerItem className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 text-sage">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-forest mb-2 font-body">Ωράριο Λειτουργίας</h3>
                    <p className="text-forest/80 font-body text-lg leading-relaxed">
                      Δευτέρα - Παρασκευή: 10:00 - 21:00<br />
                      Σάββατο: Κατόπιν ραντεβού
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Map */}
            <div>
              <Reveal>
                <div className="bg-cream p-4 rounded-3xl shadow-xl border border-sage/10 h-full min-h-[400px] relative overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.914841961426!2d23.75051187652391!3d37.86221147196347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1be123456789%3A0x123456789abcdef!2sAggelou%20Metaxa%2015%2C%20Glifada%20166%2075!5e0!3m2!1sen!2sgr!4v1700000000000!5m2!1sen!2sgr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: '1.5rem', minHeight: '400px' }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Χάρτης τοποθεσίας"
                  ></iframe>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
