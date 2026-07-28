import { useEffect, useRef, useCallback } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Cursor from './components/Cursor';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Achievements from './sections/Achievements';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Philosophy from './sections/Philosophy';
import Vision from './sections/Vision';
import Contact from './sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

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

  const handleNavigate = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(el, { offset: -72 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    []
  );

  return (
    <div className="relative overflow-hidden">
      {/* Parallax background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radialgradient(at_top_left,_rgba(0,100,255,0.03)_0%,transparent_50%)]
                   animate-[slowMove_120s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-[radialgradient(at_bottom_right,_rgba(255,0,255,0.02)_0%,transparent_60%)]
                   animate-[slowMove_180s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-[url('/static/stars.png')] bg-[size:200%_200%]
                   animate-[twinkle_4s ease-in-out_infinite] opacity-20"></div>
      </div>

      <Navigation onNavigate={handleNavigate} />
      <main className="relative z-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        >
          <Hero onNavigate={handleNavigate} />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        >
          <About />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        >
          <Achievements />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        >
          <TechStack />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        >
          <Projects />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        >
          <Philosophy />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        >
          <Vision />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "outElastic(0.5, 0.3)" }}
        >
          <Contact />
        </motion.div>
      </main>
      <Cursor />
    </div>
  );
}
