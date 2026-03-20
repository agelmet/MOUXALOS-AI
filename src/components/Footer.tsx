export function Footer() {
  return (
    <footer className="bg-forest-deep text-white/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-display text-white mb-4">Ψ-PSY</h3>
          <p className="font-body text-sm leading-relaxed">
            Ινστιτούτο Ψυχικής Υγείας & Ψυχοθεραπείας. Ένας ασφαλής χώρος αφιερωμένος στην ψυχική σας υγεία.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest text-white mb-4 uppercase">Επικοινωνια</h4>
          <p className="font-body text-sm mb-2">Λεωφόρος Βουλιαγμένης 85, Γλυφάδα</p>
          <p className="font-body text-sm mb-2">Τηλ: 210 1234567</p>
          <p className="font-body text-sm">Email: info@psy-institute.gr</p>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest text-white mb-4 uppercase">Ωραριο Λειτουργιας</h4>
          <p className="font-body text-sm mb-2">Δευτέρα - Παρασκευή: 09:00 - 21:00</p>
          <p className="font-body text-sm">Σάββατο: 10:00 - 15:00</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs">
        &copy; {new Date().getFullYear()} Ψ-PSY Ινστιτούτο Ψυχικής Υγείας & Ψυχοθεραπείας. All rights reserved.
      </div>
    </footer>
  );
}
