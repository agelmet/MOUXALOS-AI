/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Team from "./pages/Team";
import TeamDetail from "./pages/TeamDetail";
import Center from "./pages/Center";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error React Router v6 types don't officially support key on Routes, but it works and is needed for AnimatePresence */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ypiresies" element={<Services />} />
        <Route path="/ypiresies/:id" element={<ServiceDetail />} />
        <Route path="/psychologoi" element={<Team />} />
        <Route path="/psychologoi/:id" element={<TeamDetail />} />
        <Route path="/to-kentro" element={<Center />} />
        <Route path="/epikoinonia" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-cream font-body text-forest selection:bg-sage/30 selection:text-forest">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
