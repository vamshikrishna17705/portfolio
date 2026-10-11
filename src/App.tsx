import { useEffect, useRef, useState, useCallback } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import DomainFilter from './components/DomainFilter';
import Achievements from './sections/Achievements';
import Experience from './sections/Experience';
import Ventures from './sections/Ventures';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import About from './sections/About';
import Philosophy from './sections/Philosophy';
import Vision from './sections/Vision';
import Contact from './sections/Contact';
import CvDownloadModal from './components/CvDownloadModal';
import type { DomainType } from './data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [activeDomain, setActiveDomain] = useState<DomainType>('all');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback);
    };
  }, []);

  const handleNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -72 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] text-white selection:bg-[#00d4ff]/30 selection:text-white">
      <Navigation
        onNavigate={handleNavigate}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      <main>
        <Hero
          onNavigate={handleNavigate}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* Global Domain Track Bar */}
        <div className="py-6 px-4 bg-[#0a0a0a] border-y border-white/[0.06] sticky top-[72px] z-30 backdrop-blur-lg bg-black/80">
          <DomainFilter
            activeDomain={activeDomain}
            onSelectDomain={setActiveDomain}
          />
        </div>

        <Achievements />

        <Experience activeDomain={activeDomain} />

        <Ventures />

        <Projects activeDomain={activeDomain} />

        <TechStack activeDomain={activeDomain} />

        <About />

        <Philosophy />

        <Vision />

        <Contact onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      <CvDownloadModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
