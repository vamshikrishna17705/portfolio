import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, ExternalLink, Mail, ShoppingBag } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    gsap.fromTo(
      content.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#0a0a0a] min-h-[90dvh] flex flex-col justify-between pt-24"
    >
      <div className="flex-1 flex items-center justify-center">
        <div ref={contentRef} className="text-center px-6 max-w-2xl mx-auto">
          <div className="text-caption text-[#00d4ff] mb-4">
            07 · GET IN TOUCH
          </div>
          <h2 className="font-display text-hero text-white mb-6">
            LET'S BUILD.
          </h2>
          <p className="text-body-large text-[rgba(255,255,255,0.65)] max-w-lg mx-auto mb-8">
            Looking for Product Management, AI & Data Engineering, or Deep Tech roles. Let's discuss high-impact opportunities.
          </p>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="font-display text-[20px] sm:text-[24px] text-[#00d4ff] hover:underline inline-flex items-center gap-2 mb-10"
          >
            <Mail size={20} />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-caption text-[rgba(255,255,255,0.6)] transition-colors duration-200 hover:text-white"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-caption text-[rgba(255,255,255,0.6)] transition-colors duration-200 hover:text-white"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.signeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-caption text-[rgba(255,255,255,0.6)] transition-colors duration-200 hover:text-white"
            >
              <ShoppingBag size={16} />
              Signe.in
            </a>
            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-caption text-[rgba(255,255,255,0.6)] transition-colors duration-200 hover:text-white"
            >
              <ExternalLink size={16} />
              Live Site
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="w-full py-6 px-[clamp(24px,5vw,80px)] border-t border-[rgba(255,255,255,0.06)] mt-16">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-caption text-[rgba(255,255,255,0.4)]">
            © 2026 Arepally Vamshi Krishna · IIT Kharagpur (23MT10009)
          </span>
          <span className="text-caption text-[rgba(255,255,255,0.4)]">
            Built with React & Vite · Hosted on Vercel
          </span>
        </div>
      </footer>
    </section>
  );
}
